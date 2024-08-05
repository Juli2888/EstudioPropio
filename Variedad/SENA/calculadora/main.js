// Definición de la clase Calculadora
class Calculadora {
    // Constructor de la clase
    constructor() {
        // Inicialización de propiedades
        this.pantalla = document.querySelector('.pantalla'); // Selecciona el elemento con la clase 'pantalla'
        this.botones = document.querySelectorAll('.btn'); // Selecciona todos los elementos con la clase 'btn'
        this.operando1 = ''; // Primer operando de la operación
        this.operando2 = ''; // Segundo operando de la operación
        this.operador = ''; // Operador de la operación
        this.resultado = ''; // Resultado de la operación
        this.limpiarPantalla(); // Llama al método limpiarPantalla para establecer el valor inicial de la pantalla
        this.iniciarEventos(); // Llama al método iniciarEventos para configurar los eventos de los botones
    }

    // Método para limpiar la pantalla
    limpiarPantalla() {
        this.pantalla.textContent = '0'; // Establece el texto de la pantalla a '0'
    }

    // Método para configurar los eventos de los botones
    iniciarEventos() {
        this.botones.forEach(btn => { // Por cada botón
            btn.addEventListener('click', () => { // Añade un evento 'click'
                this.handleInput(btn.textContent); // Llama al método handleInput con el texto del botón como argumento
            });
        });
    }

    // Método para manejar la entrada del usuario
    handleInput(valor) {
        if (!isNaN(valor) || valor === '.') { // Si el valor es un número o un punto decimal
            this.concatenarNumero(valor); // Llama al método concatenarNumero
        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') { // Si el valor es un operador
            this.establecerOperador(valor); // Llama al método establecerOperador
        } else if (valor === '=') { // Si el valor es '='
            this.calcularResultado(); // Llama al método calcularResultado
        } else if (valor === 'C') { // Si el valor es 'C'
            this.limpiar(); // Llama al método limpiar
        } else if (valor === '←') { // Si el valor es '←'
            this.borrarUltimo(); // Llama al método borrarUltimo
        }
    }

    // Método para concatenar números a los operandos
    concatenarNumero(numero) {
        if (this.operador === '') { // Si no se ha establecido un operador
            this.operando1 += numero; // Concatena el número al primer operando
            this.actualizarPantalla(this.operando1); // Actualiza el contenido de la pantalla con el primer operando
        } else { // Si se ha establecido un operador
            this.operando2 += numero; // Concatena el número al segundo operando
            this.actualizarPantalla(this.operando2); // Actualiza el contenido de la pantalla con el segundo operando
        }
    }

    // Método para establecer el operador
    establecerOperador(operador) {
        if (this.operando1 !== '' && this.operando2 === '') { // Si hay un primer operando y no hay segundo operando
            this.operador = operador; // Establece el operador
        }
    }

    // Método para calcular el resultado de la operación
    calcularResultado() {
        if (this.operando1 !== '' && this.operando2 !== '') { // Si hay primer y segundo operando
            const num1 = parseFloat(this.operando1); // Convierte el primer operando a número
            const num2 = parseFloat(this.operando2); // Convierte el segundo operando a número
            switch (this.operador) { // Realiza la operación según el operador
                case '+':
                    this.resultado = num1 + num2; // Suma
                    break;
                case '-':
                    this.resultado = num1 - num2; // Resta
                    break;
                case '*':
                    this.resultado = num1 * num2; // Multiplicación
                    break;
                case '/':
                    if (num2 !== 0) { // Si el segundo operando no es cero
                        this.resultado = num1 / num2; // División
                    } else { // Si el segundo operando es cero
                        this.resultado = 'Error: División por cero'; // Muestra un mensaje de error
                    }
                    break;
            }
            this.actualizarPantalla(this.resultado.toString()); // Actualiza el contenido de la pantalla con el resultado
            this.operando1 = this.resultado.toString(); // Establece el resultado como el primer operando para posibles operaciones adicionales
            this.operando2 = ''; // Reinicia el segundo operando
            this.operador = ''; // Reinicia el operador
        }
    }

    // Método para limpiar los operandos, el operador y el resultado
    limpiar() {
        this.operando1 = ''; // Reinicia el primer operando
        this.operando2 = ''; // Reinicia el segundo operando
        this.operador = ''; // Reinicia el operador
        this.resultado = ''; // Reinicia el resultado
        this.limpiarPantalla(); // Llama al método limpiarPantalla para establecer el valor inicial de la pantalla
    }

    // Método para borrar el último dígito de los operandos
    borrarUltimo() {
        if (this.operador === '') { // Si no se ha establecido un operador
            this.operando1 = this.operando1.slice(0, -1); // Borra el último dígito del primer operando
            this.actualizarPantalla(this.operando1); // Actualiza el contenido de la pantalla con el primer operando
        } else { // Si se ha establecido un operador
            this.operando2 = this.operando2.slice(0, -1); // Borra el último dígito del segundo operando
            this.actualizarPantalla(this.operando2); // Actualiza el contenido de la pantalla con el segundo operando
        }
    }

    // Método para actualizar el contenido de la pantalla
    actualizarPantalla(valor) {
        this.pantalla.textContent = valor; // Establece el texto de la pantalla
    }
}

// Creación de una instancia de la clase Calculadora
const calculadora = new Calculadora();