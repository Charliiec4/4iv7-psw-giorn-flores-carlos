function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9\d.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function comparar(){
    var num1 = document.formulario.num1.value;
    var n1 = parseInt(num1);
    var num2 = document.formulario.num2.value;
    var n2 = parseInt(num2);
    var resultado = 0;
    if(n1==n2){
        resultado = n1*n2;
        document.formulario.resultado.value = resultado;
    }
    else if(n1>n2){
        resultado = n1-n2;
        document.formulario.resultado.value = resultado;
    }
    else{
        resultado = n1+n2;
        document.formulario.resultado.value = resultado;
    }
}

function borrar(){
    document.formulario.num1.value="";
    document.formulario.num2.value="";
    document.formulario.resultado.value="";
}