function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9\d.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function operacion(){
    var c = document.formulario.total.value;
    var compra = parseInt(c);
    var total = compra - compra*.15;
    document.formulario.totaldesc.value="$"+total;
}

function borrar(){
    document.formulario.total.value="";
    document.formulario.totaldesc.value="";
}