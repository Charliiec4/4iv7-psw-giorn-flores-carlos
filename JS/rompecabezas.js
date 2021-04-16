//id ya identificados en html
//entonces ocupar clases

var piezas = document.getElementsByClassName('movil');

//definir el tamaño de las piezas

var tamWidth = [134, 192, 134, 163, 134, 163, 134, 192, 134];
var tamHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163];

for(var i = 0; i<piezas.length; i++){
    piezas[i].setAttribute("width", tamWidth[i]);
    piezas[i].setAttribute("height", tamHeight[i]);
    piezas[i].setAttribute("x", Math.floor((Math.random()*10)+1));
    piezas[i].setAttribute("x", Math.floor((Math.random()*409)+1));
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementoSeleccionado = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0; 


function seleccionarElemento(evt){
    elementoSeleccionado = reordenar(evt);
    //la posisicon del navegador referente a la pieza
    currentX = evt.clientX;
    currentY = evt.clientY;

    //enviar pos
    currentPosX = parseFloat(elementoSeleccionado.getAtributte("x"));
    currentPosY = parseFloat(elementoSeleccionado.getAtributte("y"));

    //moverlo
    elementoSeleccionado.setAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt){
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;

    //asignardicas coordenadas
    currentPosX = currentPosX - dx;
    currentPosY = currentPosY - dy;

    elementoSeleccionado.setAttribute("x", currentPosX);
    elementoSeleccionado.setAttribute("y", currentPosY);
//DONDE LO VOYA ASOLTAR
    currentX = evt.clientX;
    currentY = evt.clientY;
    elementoSeleccionado.setAttribute("onmouseout", "deseleccionarELemento(evt)");
    elementoSeleccionado.setAttribute("onmouseup", "deseleccionarELemento(evt)");
    //iman

}

function deseleccionarElemento(evt){
    testing();
    if(elementoSeleccionado !=0 ){
        elementoSeleccionado.removeAtributte("onmousemove");
        elementoSeleccionado.removeAtributte("onmouseout");
        elementoSeleccionado.removeAtributte("onmouseup");
        elementoSeleccionado = 0;
    }
}

var entorno = document.getElementsById('entorno');

function reordenar(evt){
    var padre = evt.target.paerntNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAtributte("id");

    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);

    return entorno.lastChild.firstChild;
}

//necesito saber cual es la posicion corrrecta
    var origenX = [200, 304, 466, 200, 333, 437, 200, 304, 466];
    var origenY = [100, 100, 100, 233, 204, ];

    function iman(){
        for(var i = 0; i<piezas.length;i++){
            if(Math.abs(currentPosX - origenX[i])< 15 && Math.abs(currentPosY - origenY[i])< 15){
                elementoSeleccionado.setAttribute("x", origenX[i]);
                elementoSeleccionado.setAttribute("y", origenY[i]);
            }
        }
    }

    function testing(){
        var bien_ubicada = 0;
        var padres = document.getElementsByClassName('padre');

        for(var i = 0; i<piezas.length; i++ ){
            var posx= parseFloat(psdres[i].firstChild.getAtributte("x"));
            var posy= parseFloat(psdres[i].firstChild.getAtributte("y"));

            var ide = padres.getAtributte("id");

            if(origenX[ide] == posx && origenX[ide] == posy){
                bien_ubicada = bien_ubicada +1;

            }
        }
        if(bien_ubicada == 9){
            alert("Gane");
        }

    }