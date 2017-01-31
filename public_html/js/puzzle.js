 function Puzzle() {
    this.numPiezas = 4;
    this.estado;
    this.reset();
}

Puzzle.prototype.getNumPosicionEnCaja = function (idPieza) {
    if (isQuitadaPieza(idPieza)) {
        return -this.estado[idPieza - 1];
    } else {
        throw "La pieza no esta en la caja";
    }
};
Puzzle.prototype.getNumPosicionEnTablero = function (idPieza) {
    if (isColocadaPieza(idPieza)) {
        return this.estado[idPieza - 1];
    } else {
        throw "La pieza no esta en el tablero";
    }
};
Puzzle.prototype.getNumPiezas = function () {
    return numPiezas;
};

Puzzle.prototype.isLibreHuecoTablero = function (posicion) {
    for (var i = 0; i < this.estado.lenght; i++) {
        if (this.estado[i] === posicion) {
            return false;
        }
    }
    return true;
};

Puzzle.prototype.isPermitidoColocarPieza = function (idPieza, posicion) {
    if (this.isLibreHuecoTablero(posicion)) {
        return true;
    }
    return false;
};

Puzzle.prototype.isPermitidoQuitarPieza = function (idPieza) {
    return this.isColocadaPieza(idPieza);
};

Puzzle.prototype.isColocadaPieza = function (idPieza) {
    if (idPieza < 0) {
        return false;
    }
    return true;
};

Puzzle.prototype.isQuitadaPieza = function (idPieza) {
    if (idPieza > 0) {
        return false;
    }
    return true;
};

Puzzle.prototype.reset = function () {
    this.estado = [];
    for (var i = 0; i < numPiezas; i++) {
        this.estado.push(-(i + 1));
    }
}

Puzzle.prototype.colocarPieza = function (idPieza, posicion) {
    this.estado[idPieza - 1] = posicion;
}

Puzzle.prototype.quitarPieza = function (idPieza) {
    this.estado[idPieza - 1] = -idPieza;
}

Puzzle.prototype.isResuelto = function () {
    for (var i = 0; i < this.estado.length; i++) {
        if (this.estado[i] !== i + 1) {
            return false;
        }
    }
    return true;
}

var puzzle = new Puzzle(4);

/*Puzzle.prototype.onDragStartPiezaSinPoner = function (event) {
    event.dataTransfer.setData("text", event.target.id);
}

Puzzle.prototype.onDragStartPiezaPuesta = function (event) {
    event.dataTransfer.setData("text", event.target.id);
}

Puzzle.prototype.onDropPiezaSinPoner = function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));

}

Puzzle.prototype.onDropPiezaPuesta = function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

Puzzle.prototype.onDragOverPiezaSinPoner = function (event) {
    event.preventDefault();
}

Puzzle.prototype.onDragOverPiezaPuesta = function (event) {
    event.preventDefault();
}*/