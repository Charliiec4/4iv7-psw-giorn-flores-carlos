function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function primer() {
    var v1 = document.formulario.vent1.value;
    var v1int = parseInt(v1);
    var comision = v1int * 0.1;
    document.formulario.comi1.value = "$" + comision;
}

function segunda() {
    var v2 = document.formulario.vent2.value;
    var v2int = parseInt(v2);
    var comision = v2int * 0.1;
    document.formulario.comi2.value = "$" + comision;
}

function tercer() {
    var v3 = document.formulario.vent3.value;
    var v3int = parseInt(v3);
    var comision = v3int * 0.1;
    document.formulario.comi3.value = "$" + comision;
}

function gains() {
    var sueldo = document.formulario.sueldo.value;
    var sueldoint = parseInt(sueldo);
    var v1 = document.formulario.vent1.value;
    var v1int = parseInt(v1);
    var comision1 = v1int * 0.1;
    var v2 = document.formulario.vent2.value;
    var v2int = parseInt(v2);
    var comision2 = v2int * 0.1;
    var v3 = document.formulario.vent3.value;
    var v3int = parseInt(v3);
    var comision3 = v3int * 0.1;
    var total = comision1 + comision2 + comision3 + sueldoint;
    document.formulario.ganancia.value = "$" + total;
}

function borrar() {    
    document.formulario.vent1.value= "";
    document.formulario.vent2.value= "";
    document.formulario.vent3.value= "";
    document.formulario.ganancia.value = "";
    document.formulario.sueldo.value = "";
    document.formulario.comi1.value= "";
    document.formulario.comi2.value= "";
    document.formulario.comi3.value= "";

}

function todo() {
    primer();
    segunda();
    tercer();
    gains();
}