{
    var puzzle_test = new Puzzle(4);
    puzzle_test.colocarPieza(1, 3);

    if (puzzle_test.isColocadaPieza(1) == true) {
        alert("Error en el test de isColocadaPieza");
    }
}


{
    var puzzle_test = new Puzzle(4);
    puzzle_test.colocarPieza(1, 3);
    puzzle_test.quitarPieza(1);
    if (!puzzle_test.isQuitadaPieza(1) == true) {
        alert("Error en el test de isQuitadaPieza");
    }
    if (!puzzle_test.isColocadaPieza(1) == false) {
        alert("Error en el test de isColocadaPieza");
    }
    if (!puzzle_test.getNumPosicionEnCaja(1) === 1) {
        alert("Error en el test de getNumPosicionEnCaja");
    }
}

