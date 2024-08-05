import 'package:flutter/material.dart';
import 'joker.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Luffy Game',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: LuffyPage(),
    );
  }
}
