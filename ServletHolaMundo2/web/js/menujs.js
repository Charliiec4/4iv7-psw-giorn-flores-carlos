 function vChar(){
       
        var char = /^[A-Za-z]+$/;
        var vEmail = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    
        if(document.querySelector('#nombre').value.match(char) && document.querySelector('#appat').value.match(char) &&
        document.querySelector('#appmat').value.match(char) && document.querySelector('#email').value.match(vEmail)){
            return true;
        }
            if(document.querySelector('#nombre').value.trim()=="" || document.querySelector('#appat').value.trim()=="" 
                || document.querySelector('#appmat').value.trim()=="" || document.querySelector('#email').value.trim()==""){
                alert('Por favor, complete todos los espacios')
                event.preventDefault()
            }else{
                    alert('Por favor, ingrese únicamente letras (sin acentos ni espacios)');
                    event.preventDefault()
                }
    }
    function vNum(){
        
        var NUM = /^[0-9]+$/;
    
        if(document.querySelector('#eliminar').value.match(NUM) && document.querySelector('#eliminar').value.trim() !== ""){
            console.log('solo hay números');
            return true;
        }
            if(document.querySelector('#eliminar').value.trim() == ""){
                alert('Por favor, ingrese el ID del usuario que desea eliminar')
                event.preventDefault()
            }else{
                    alert('Por favor, ingrese únicamente números para eliminar un usuario');
                    event.preventDefault()
                }
    }
    
    function validar(){
        vChar();
        vNum();
    }

