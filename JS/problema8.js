function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9\d.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular(){
    var num1 = document.formulario.num1.value;
    var n1 = parseInt(num1);
    var num2 = document.formulario.num2.value;
    var n2 = parseInt(num2);
    var num3 = document.formulario.num3.value;
    var n3 = parseInt(num3);
    if(n1>n2 && n1>n3){
        document.formulario.mayor.value = n1;
    }else if(n2>n1 && n2>n3){
        document.formulario.mayor.value = n2;
    }else{
        document.formulario.mayor.value = n3;
    }
}

function borrar(){
    document.formulario.num1.value="";
    document.formulario.num2.value="";
    document.formulario.num3.value="";
    document.formulario.mayor.value="";
}