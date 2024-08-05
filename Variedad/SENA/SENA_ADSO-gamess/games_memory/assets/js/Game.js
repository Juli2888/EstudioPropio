class Game {
  constructor(contGameGame, level) {
    // Asigna el elemento HTML con el id especificado al atributo contGame
    this.contGame = document.getElementById(contGameGame);
    // Inicializa el atributo contCardGame sin asignarle ningún valor
    this.contCardGame;
    // Obtiene el origen del servidor y lo asigna al atributo getServer
    this.getServer = window.location.origin;
    // Nombre de la carpeta donde se encuentran los recursos del juego
    this.folderPath = "/games_memory";
    // Ruta completa del servidor donde se encuentra el juego
    this.serverPath = this.getServer + this.folderPath;
    // Ruta del archivo JSON que contiene los datos del juego
    this.uriJson = this.serverPath + "/assets/doc/User.json";
    // Ruta de la carpeta donde se encuentran las imágenes del juego
    this.pathImg = this.serverPath + "/assets/img/memory/";
    // Ruta de la imagen predeterminada del juego
    this.pathImgDafault = this.serverPath + "/assets/img/memory/img_default.png";
    // Calcula el ancho de las cartas en función del nivel de dificultad
    this.longBootstrap = 12 / level;
    // Arreglo para almacenar los datos del JSON
    this.newArrayGames = [];
    // Arreglo para almacenar las cartas del juego
    this.arrayGamesCard = [];
    // Obtiene los datos del JSON al iniciar el juego
    this.getDataJson();
    // Nivel de dificultad del juego
    this.num = level;
    // Valor máximo para generar números aleatorios
    this.max = 19;
    // Valor mínimo para generar números aleatorios
    this.min = 0;
    // Número máximo de cartas en el juego
    this.maxCard = (this.num * this.num) / 2;
    // Arreglo para almacenar las cartas volteadas
    this.flippedCards = [];
    // Variable para bloquear el tablero mientras se realiza la comparación de cartas
    this.lockBoard = false;
    // Contador para las cartas coincidentes
    this.matchedCards = 0;
  }

  // Método para obtener los datos del JSON mediante una solicitud fetch
  getDataJson() {
    fetch(this.uriJson)
      .then(response => response.json())
      .then(data => {
        this.setElements(data); // Ejecuta el método setElements con los datos obtenidos del JSON
      });
  }

  // Método para generar un arreglo aleatorio de elementos
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

  // Método para mezclar un arreglo aleatorio
  setShuffleArray(dataArrar) {
    return dataArrar.sort(() => Math.random() - 0.5);
  }

  // Método para construir las cartas del juego y mostrarlas en el contenedor
  setElements(arraJson) {
    let cards = "";
    let cardsAux = "";
    let cont = 0;
    let row = this.num - 1;
    this.contGame.innerHTML = ""; // Limpia el contenido del contenedor del juego
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
    this.contGame.innerHTML = cards; // Agrega las cartas al contenedor del juego
    this.showFrontSide(); // Muestra la parte frontal de las cartas durante 10 segundos
  }

  // Método para mostrar la parte frontal de las cartas
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
        this.enableClick(); // Habilita la interacción del jugador después de mostrar la parte frontal durante 10 segundos
      }, 10000);
    }
  }

  // Método para habilitar el clic en las cartas
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
            this.checkForMatch(); // Verifica si hay una coincidencia entre las cartas volteadas
          }
        }
      });
    }
  }

  // Método para verificar si las cartas volteadas coinciden
  checkForMatch() {
    const firstCard = this.flippedCards[0];
    const secondCard = this.flippedCards[1];
    const firstImg = this.contCardGame[firstCard].querySelector('img');
    const secondImg = this.contCardGame[secondCard].querySelector('img');
    const pathDefault = this.pathImgDafault;
    this.lockBoard = true;

    if (firstImg.dataset.src === secondImg.dataset.src) {
      // Si las cartas son un par
      this.matchedCards += 2;
      this.flippedCards = [];

      if (this.matchedCards === this.maxCard) {
        // Si todas las cartas se han emparejado
        setTimeout(() => {
          alert("¡Has ganado!");
        }, 500);
      }
      this.lockBoard = false;
    } else {
      // Si las cartas no son un par
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
}

// Uso del objeto Game
const game = new Game("contGame", 4); // Crea un nuevo juego con un nivel de 4x4
