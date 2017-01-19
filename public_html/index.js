function onDragStartPieza(event) {
    event.dataTransfer.setData("text", event.target.id);
}
;

function onDropHuecoCaja(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
;

function onDropHuecoTablero(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
;

function onDragOverHuecoCaja(event) {
    event.preventDefault();
}
;

function onDragOverHuecoTablero(event) {
    event.preventDefault();
}

function getIdPiezaFromElementPieza(elementPieza){
    var value = $(elementPieza).attr("id-pieza")
    return $(elementPieza).attr("id-pieza") * 1;
}

function getIdHuecoTableroFromElementHuecoTablero(elementHuecoTablero) {
    return $(elementHuecoTablero).attr("id-hueco-tablero") * 1;
}

function getIdHuecoCajaFromElementHuecoCaja(elementHuecoCaja){
    return $(elementHuecoCaja).attr("id-hueco-caja") * 1;
}

function getElementPiezaFromIdPieza(idPieza){
    var elements=$("[id-pieza='" + idPieza + "']");
    
    if (elements.length === 0) {
        throw "No existe el elemento con idPieza=" + idPieza;
    }
    if (elements.lenght > 1) {
        throw "Existe mas de un elemento con idPieza=" + idPieza;
    }
    
    return elements[0];
}

function getElementHuecoTableroFromIdHuecoTablero(idHuecoTablero){
    return $("[id-hueco-tablero='" + idHuecoTabero + "']")[0];
}

function getElementHuecoCajaFromIdHuecoCaja(idHuecoCaja){
    return $("[id-hueco-caja='" + idHuecoCaja + "']")[0];
}

;