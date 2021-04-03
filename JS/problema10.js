function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8)return true;
    var patron =/[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function opcion(){
    if (document.formulario.tiempo.value>5){
        alert("Escribe la opcion de acuerdo a la lista. Ejemplo: '1' (menos de un año)")
        formulario.tiempo.focus()
        return false;
    }
    else{
        calculars();
        alert("¡Felicidades por tu constancia!")
    }
}

function calculars(){
    var años = document.formulario.tiempo.value;
    var añosint = parseInt(años);
    var salario = document.formulario.salario.value;
    var salarioint = parseInt(salario);
    var total = 0;
    if(añosint==1){
        total = salarioint + (0.05*salarioint);
        document.formulario.total.value ="$" + total;
    }else if(añosint==2){
        total = salarioint + (0.07*salarioint);
        document.formulario.total.value ="$" + total;
    }else if(añosint==3){
        total = salarioint + (0.1*salarioint);
        document.formulario.total.value ="$" + total;
    }else if(añosint==4){
        total = salarioint + (0.15*salarioint);
        document.formulario.total.value ="$" + total;
    }else{
        total = salarioint + (0.20*salarioint);
        document.formulario.total.value ="$" + total;
    }
}

function borrar(){
    document.formulario.tiempo.value="";
    document.formulario.salario.value="";
    document.formulario.total.value="";
}