function vChar() {
    // sólo se aceptan letras mayúsculas y minúsculas. No espacios ni acentos.
    var str = /^[A-Za-z]+$/;
    var vEm = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    if (document.querySelector('#nombre').value.match(str) && document.querySelector('#appat').value.match(str) &&
            document.querySelector('#appmat').value.match(str) && document.querySelector('#email').value.match(vEm)) {
        return true;
    }
    if (document.querySelector('#nombre').value == "" || document.querySelector('#appat').value == ""
            || document.querySelector('#appmat').value == "" || document.querySelector('#email').value == "" || document.querySelector('#edad').value == "") {
        alert('Por favor, complete todos los espacios')
        event.preventDefault()
    } else {
        alert('Por favor, ingrese únicamente letras (sin acentos ni espacios)');
        event.preventDefault()
    }
}

function vNum1() {
    // solo se aceptan numeros sin espacios
    var num = /^[0-9]+$/;

    if (document.querySelector('#eliminar').value.match(num) && document.querySelector('#eliminar').value.trim() !== "") {
        return true;
    }

    if (document.querySelector('#eliminar').value.trim() == "") {
        alert('Por favor, ingrese el ID del usuario')
        event.preventDefault()
    } else {
        alert('Por favor, ingrese únicamente números');
        event.preventDefault()
    }
}

function vValidar() {
    // solo se aceptan numeros sin espacios
    var num = /^[0-9]+$/;

    if (document.querySelector('#ID').value.match(num) && document.querySelector('#ID').value.trim() !== "") {
        return true;
    }

    if (document.querySelector('#ID').value.trim() == "") {
        alert('Por favor, ingrese el ID del usuario')
        event.preventDefault()
    } else {
        alert('Por favor, ingrese únicamente números');
        event.preventDefault()
    }

}

function vVal() {
    var str = /^[A-Za-z]+$/;
    var vEm = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    if (document.querySelector('#Nombre').value.match(str) && document.querySelector('#Appat').value.match(str) &&
            document.querySelector('#Appmat').value.match(str) && document.querySelector('#Email').value.match(vEm)) {
        return true;
    }
    if (document.querySelector('#Nombre').value == "" || document.querySelector('#Appat').value == ""
            || document.querySelector('#Appmat').value == "" || document.querySelector('#Edad').value == "" || document.querySelector('#Email').value == "") {
        alert('Por favor, complete todos los espacios')
        event.preventDefault()
    } else {
        alert('Por favor, ingrese únicamente letras (sin acentos ni espacios)');
        event.preventDefault()
    }
}

function validar(){
    vVal()
    vValidar()
}