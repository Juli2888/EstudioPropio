import 'dart:math';
import 'package:flutter/material.dart';

class LuffyPage extends StatefulWidget {
  @override
  _LuffyPageState createState() => _LuffyPageState();
}

class _LuffyPageState extends State<LuffyPage> {
  final TextEditingController _controller = TextEditingController();
  final int _randomNumber = Random().nextInt(100) + 1;
  int _attempts = 0;
  String _message =
      'Hola, soy Luffy. He pensado un número del 1 al 100 y te reto a que adivines en menos de 10 intentos.';

  void _checkGuess() {
    setState(() {
      _attempts++;
      int guess = int.parse(_controller.text);

      if (_attempts >= 10) {
        _message =
            '¡No has adivinado el número en 10 intentos! El número era $_randomNumber.';
      } else if (guess == _randomNumber) {
        _message =
            '¡Felicitaciones! Has adivinado el número $_randomNumber en $_attempts intentos.';
      } else if (guess < _randomNumber) {
        _message = 'El número es mayor que $guess. Intenta de nuevo.';
      } else {
        _message = 'El número es menor que $guess. Intenta de nuevo.';
      }
    });
  }

  @override
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Luffy GAME',
            style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Color.fromARGB(255, 255, 255, 255))),
        backgroundColor: Color.fromARGB(255, 206, 2, 2),
      ),
      backgroundColor: Color.fromARGB(246, 192, 199, 191),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            CircleAvatar(
              backgroundImage: AssetImage('assets/imagenes/2.png'),
              radius: 100, // Ajusta el radio para cambiar el tamaño
            ),
            SizedBox(height: 20),
            Text(
              _message,
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 18),
            ),
            TextField(
              controller: _controller,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(labelText: 'Introduce un número'),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _checkGuess,
              child: Text('Adivina'),
            ),
          ],
        ),
      ),
    );
  }
}
