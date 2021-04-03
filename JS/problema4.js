function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function verificacion(){
    if (formulario.parcial1.value.length > 2 || formulario.parcial2.value.length > 2 || formulario.parcial3.value.length > 2 || formulario.examen.value.length > 2 || formulario.trabajo.value.length > 2) {
        alert("ingresa solo 2 digitos en los campos Ejemplo: 7.5/ 7 / 10")
        return false;
    }
    else{
        promediar();
        if(document.formulario.promedio.value<5){
            alert("Estas reprobado")
            return false;
        }
        else{
            alert("Bien hecho")
            return false;
        }

    }
}
function promediar() {
    var parcial1 = document.formulario.parcial1.value;
    var p1 = parseInt(parcial1);
    var parcial2 = document.formulario.parcial2.value;
    var p2 = parseInt(parcial2);
    var parcial3 = document.formulario.parcial3.value;
    var p3 = parseInt(parcial3);
    var examen = document.formulario.examen.value;
    var examint = parseInt(examen);
    var trabajo = document.formulario.trabajo.value;
    var tint = parseInt(trabajo); 
    var parcialesp = ((p1 + p2 + p3) / 3) * (.55);
    var examenf = examint * 0.3;
    var trabajop = tint * 0.15;
    var total = parcialesp + examenf + trabajop ;

    document.formulario.promedio.value = total;
}

function borrar() {
    document.formulario.parcial1.value = "";
    document.formulario.parcial2.value = "";
    document.formulario.parcial3.value = "";
    document.formulario.examen.value = "";
    document.formulario.trabajo.value = "";
    document.formulario.promedio.value = "";
}

