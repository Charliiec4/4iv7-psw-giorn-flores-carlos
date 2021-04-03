function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function robot(){
    if (document.formulario.horas.value>90){
        alert("¿Acaso eres un robot?")
        return false;
    }
    else{
        calcular();
    }
}

function calcular(){
    var horas = document.formulario.horas.value;
    var hrs = parseInt(horas);
    var salario = document.formulario.pago.value;
    var sal = parseInt(salario);
    var total
    if(hrs>=40){
        if(hrs<=48){
            var horasExtra = hrs-40;
            var extras = horasExtra*(2*sal);
            total = extras + ((hrs-horasExtra)*sal);
            document.formulario.total.value ="$" + total;
        }
        else{
            var horasExtra = hrs - 48;
            var extras = 8*(2*salario);
            var salarioExtraE = horasExtra*(3*salario);
            total = salarioExtraE + extras + ((hrs-8-horasExtra)*salario);
            document.formulario.total.value ="$" + total;
        }
    }
    else{
        total = hrs*salario;
        document.formulario.total.value ="$" + total;
    }
}

function borrar(){
    document.formulario.horas.value="";
    document.formulario.pago.value="";
    document.formulario.total.value="";
}