//prblema 1

// problema1
function problema1(){

    var p1_input = document.querySelector('#p1-input').value;
    var p1_array = p1_input.split(' ').reverse();
    var p1_res = '';
    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });
    document.querySelector('#p1-output').textContent = p1_res;

}

//problema 2
function problema2(){

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5]; 
    v1 = v1.sort(function(a, b){
        return b-a;
    });
    v2 = v2.sort(function(a, b){
        return b-a;
    });
    v2 = v2.reverse();
    var p2_producto = 0;
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }
    document.querySelector('#p2-output').textContent = 'Producto escalar minimo : '+p2_producto;
}

//problema 3
function extraerCU(texto) {
    let cu = []
    for (let i = 0; i < texto.length; i++) {
        if (cu.indexOf(texto.charAt(i)) == -1) {
            cu += texto[i]
        }
    }
    return cu
}

function problema3(){
    var checkStr = document.querySelector('#p3-input').value;
    
    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM,";
    if(checkStr.length <= 70){
        var seguir = true;
        for(var i=0; i<checkStr.length; i++){
            var tam = checkStr.charAt(i);
            for(var j = 0; j < checkOK.length; j++){
                if(tam == checkOK.charAt(j))
                    break;
                if(j == checkOK.length - 1){
                    seguir = false;
                    break;
                }
            }
        }
        if(seguir == true){
            var cadena = checkStr.split(',');
            var array = [];
            cadena.forEach(function(cadena){
                var p3_array = [];
             
                for(var i = 0; i < cadena.length; i++){
                    p3_array.push(cadena.charAt(i));
                }
            
                for(var i = p3_array.length -1; i >=0; i--){
                    if(p3_array.indexOf(p3_array[i]) !== i) p3_array.splice(i,1);
                }
                array.push(p3_array.length);
            });
           
            var p3_mas = Math.max.apply(null, array);
            var p3_res = "";
          
            for(var i = 0; i < array.length; i ++){
                if(array[i] == p3_mas){
                    p3_res += cadena[i] + ",";
                }
            }
            
            var cu = extraerCU(checkStr);
            var palabras = checkStr + " Caracteres Unicos: "+ cu;
            document.querySelector('#p3-output').textContent= 'palabras: '+ palabras +
            '\nLas palabra mas grande es: ' + p3_res + ' Con un total de ' + p3_mas + ' caracteres unicos';    
            
        }
        else{
            alert("Caracteres invalidos (solo palabras, sin espacios)");
        }
        } else{
            alert("La palabra mas grande es de 23, no mas de 70 caracteres");
        }
}

