function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function operacion(){
    var nhombres = document.formulario.hombres.value;
    var Hombres = parseInt(nhombres);
    var nmujeres = document.formulario.mujeres.value;
    var Mujeres = parseInt(nmujeres);
    var total = Hombres + Mujeres;
    var ph = (Hombres*100)/total;
    var pm = (Mujeres*100)/total;
    document.formulario.Phombre.value=ph + "%";
    document.formulario.Pmujer.value=pm+ "%";
}

function borrar(){
    document.formulario.hombres.value="";
    document.formulario.mujeres.value="";
    document.formulario.Phombre.value="";
    document.formulario.Pmujer.value="";
}