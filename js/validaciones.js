// Validaciones formularios

document.addEventListener('DOMContentLoaded', function () {

    // FORM PEDIDO
    const pedidoForm = document.querySelector('#contenido form');

    if (pedidoForm &&
        pedidoForm.querySelector('input[name=\"nombre\"]')) {

        pedidoForm.addEventListener('submit', function (e) {

            e.preventDefault();

            const formData = new FormData(pedidoForm);

            const data = Object.fromEntries(formData);

            const requiredFields = [
                'nombre',
                'apellido',
                'email',
                'servicio'
            ];

            let isValid = true;

            requiredFields.forEach(field => {

                const input = pedidoForm.querySelector(
                    `[name=\"${field}\"]`
                );

                if (!data[field] ||
                    data[field].trim() === '') {

                    input.style.borderColor = 'red';

                    isValid = false;

                } else {

                    input.style.borderColor = '#ccc';

                }

            });

            if (!isValid) {

                alert(
                    'Por favor completa todos los campos requeridos'
                );

                return;

            }

            // SIMULACIÓN EXITOSA
            alert(
                'Pedido enviado exitosamente. Te contactaremos pronto.'
            );

            pedidoForm.reset();

        });

    }

});