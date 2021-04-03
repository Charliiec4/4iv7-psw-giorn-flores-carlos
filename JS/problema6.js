function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron =/[0-9\d.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}
function vivo(){
    if (document.formulario.año.value<1900){
        alert("Pacto con el diablo, cierto?")
        return false;
    }
    else{
        edad();
    }
}
function edad(){
    var año = parseInt(document.formulario.año.value);
    var hoy = new Date();
    const hoyint = parseInt(hoy.getFullYear());
    var edad = hoyint-año;
    document.formulario.edad.value = edad + " años";
}

function borrar() {
    document.formulario.año.value = "";
    document.formulario.edad.value = "";
}