document.addEventListener('DOMContentLoaded', function () {

    const pedidoForm = document.querySelector('#contenido form');

    if (pedidoForm) {

        pedidoForm.addEventListener('submit', function (e) {

            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            const servicio = document.getElementById('servicio').value;
            const fecha = document.getElementById('fecha').value;
            const canal = document.getElementById('canal').value;

            if (nombre && apellido && telefono && email && servicio && fecha && canal) {
                alert('Pedido enviado exitosamente.');
                pedidoForm.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }

        });

    }

});