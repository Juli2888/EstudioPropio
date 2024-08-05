class Game {
  constructor(contGameGame, level, prog, chor, speed, maxMilliseconds) {
    this.contGame = document.getElementById(contGameGame);
    this.contCardGame;
    this.getServer = window.location.origin;
    this.folderPath = "/games_memory";
    this.serverPath = this.getServer + this.folderPath;
    this.uriJson = this.serverPath + "/assets/doc/User.json";
    this.pathImg = this.serverPath + "/assets/img/memory/";
    this.pathImgDafault = this.serverPath + "/assets/img/memory/img_default.png";
    this.longBootstrap = 12 / level;
    this.newArrayGames = [];
    this.arrayGamesCard = [];
    this.getDataJson();
    this.num = level;
    this.max = 19;
    this.min = 0;
    this.maxCard = (this.num * this.num) / 2;
    this.flippedCards = [];
    this.lockBoard = false;
    this.matchedPairs = 0; // Nuevo atributo para contar los pares coincidentes encontrados
    this.progressCont = document.getElementById(prog); // Elemento de la barra de progreso
    this.chronometer = new Chronometer(chor, speed, maxMilliseconds); // Cronómetro
  }

  getDataJson() {
    fetch(this.uriJson)
      .then(response => response.json())
      .then(data => {
        this.setElements(data);
        this.chronometer.startChronometer(); // Inicia el cronómetro después de cargar los datos
      });
  }

  getRandomArray(min, max, count) {
    let contentGame = [];
    let contentNum = [];
    if (min > max || count > max - min) {
      return false;
    }
    while (contentGame.length < count) {
      var num = Math.floor((Math.random() * (max - min)) + min);
      if (!contentNum.includes(num)) {
        contentGame.push(this.newArrayGames[num]);
        contentNum.push(num);
      }
    }
    this.arrayGamesCard = contentGame.concat(contentGame);
    return this.setShuffleArray(this.arrayGamesCard);
  }

  setShuffleArray(dataArrar) {
    return dataArrar.sort(() => Math.random() - 0.5);
  }

  setElements(arraJson) {
    let cards = "";
    let cardsAux = "";
    let cont = 0;
    let row = this.num - 1;
    this.contGame.innerHTML = "";
    this.newArrayGames = arraJson;
    const getNewArray = this.getRandomArray(this.min, this.max, this.maxCard);

    for (let i = 0; i < getNewArray.length; i++) {
      cardsAux += '<div class="col-' + this.longBootstrap + ' pt-2 mx-auto contCard" disabled><div class="card" ><img data-src="' + this.pathImg + getNewArray[i].img + '" src="' + this.pathImgDafault + '" class="card-img-top" alt="..."> <div class="card-body"><h5 class="card-title">' + getNewArray[i].nombre + '</h5><p class="card-text">' + getNewArray[i].valor + '</p></div></div></div>';
      cont++;
      if (row == cont - 1) {
        cards += '<div class="row">' + cardsAux + '</div>';
        cont = 0;
        cardsAux = "";
      }
    }
    this.contGame.innerHTML = cards;
    this.showFrontSide();
  }

  showFrontSide() {
    this.contCardGame = document.querySelectorAll('.contCard');
    var pathDefault = this.pathImgDafault;
    for (let i = 0; i < this.contCardGame.length; i++) {
      const objImg = this.contCardGame[i].querySelector('img');
      const cardIndex = i;
      const cardTitle = this.contCardGame[i].querySelector('.card-title');
      const cardText = this.contCardGame[i].querySelector('.card-text');
      objImg.src = objImg.dataset.src;
      objImg.setAttribute('data-flipped', 'true');
      cardTitle.style.visibility = 'visible';
      cardText.style.visibility = 'visible';
      setTimeout(() => {
        objImg.src = pathDefault;
        objImg.removeAttribute('data-flipped');
        cardTitle.style.visibility = 'hidden';
        cardText.style.visibility = 'hidden';
        this.enableClick();
      }, 10000);
    }
  }

  enableClick() {
    for (let i = 0; i < this.contCardGame.length; i++) {
      const objImg = this.contCardGame[i].querySelector('img');
      const cardIndex = i;
      const cardTitle = this.contCardGame[i].querySelector('.card-title');
      const cardText = this.contCardGame[i].querySelector('.card-text');
      this.contCardGame[i].addEventListener('click', () => {
        if (!this.lockBoard && !this.flippedCards.includes(cardIndex) && objImg.getAttribute('data-flipped') !== 'true') {
          objImg.src = objImg.dataset.src;
          objImg.setAttribute('data-flipped', 'true');
          cardTitle.style.visibility = 'visible';
          cardText.style.visibility = 'visible';
          this.flippedCards.push(cardIndex);
          if (this.flippedCards.length === 2) {
            this.checkForMatch();
          }
        }
      });
    }
  }

  checkForMatch() {
    const firstCard = this.flippedCards[0];
    const secondCard = this.flippedCards[1];
    const firstImg = this.contCardGame[firstCard].querySelector('img');
    const secondImg = this.contCardGame[secondCard].querySelector('img');
    const pathDefault = this.pathImgDafault;
    this.lockBoard = true;

    if (firstImg.dataset.src === secondImg.dataset.src) {
      this.matchedPairs++; // Incrementa el contador de pares coincidentes encontrados
      this.flippedCards = [];

      if (this.matchedPairs === this.maxCard / 2) { // Verifica si se han encontrado todos los pares posibles
        setTimeout(() => {
          alert("¡Has ganado!");
        }, 500);
      }
      this.updateProgressBar(); // Actualiza la barra de progreso
      this.lockBoard = false;
    } else {
      setTimeout(() => {
        firstImg.src = pathDefault;
        firstImg.removeAttribute('data-flipped');
        secondImg.src = pathDefault;
        secondImg.removeAttribute('data-flipped');
        const firstCardTitle = this.contCardGame[firstCard].querySelector('.card-title');
        const firstCardText = this.contCardGame[firstCard].querySelector('.card-text');
        const secondCardTitle = this.contCardGame[secondCard].querySelector('.card-title');
        const secondCardText = this.contCardGame[secondCard].querySelector('.card-text');
        firstCardTitle.style.visibility = 'hidden';
        firstCardText.style.visibility = 'hidden';
        secondCardTitle.style.visibility = 'hidden';
        secondCardText.style.visibility = 'hidden';
        this.flippedCards = [];
        this.lockBoard = false;
      }, 1000);
    }
  }

  updateProgressBar() {
    const progressPercentage = (this.matchedPairs / (this.maxCard / 2)) * 100; // Calcula el porcentaje de pares coincidentes encontrados
    this.progressCont.style.width = progressPercentage + "%";
    this.progressCont.innerText = progressPercentage.toFixed(2) + "%";
  }
}

// Uso del objeto Game
const game = new Game("contGame", 4, "progressBar", "chronometer", 1000, 60000);
