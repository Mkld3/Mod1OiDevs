var form = document.getElementById('formulario');
var campo = document.getElementById('input_email');


form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(campo.value);
    console.log(campo.value);
    // impede o envio do form
    e.preventDefault();
});