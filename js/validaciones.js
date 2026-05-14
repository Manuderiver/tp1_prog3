document.addEventListener('DOMContentLoaded', function () {

    // =========================
    // FORMULARIO PEDIDO
    // =========================

    const pedidoForm = document.querySelector(
        'form[aria-label="Formulario de pedido"]'
    );

    if (pedidoForm) {

        pedidoForm.addEventListener(
            'submit',
            function (e) {

                e.preventDefault();

                alert(
                    'Pedido enviado exitosamente'
                );

                pedidoForm.reset();

            }
        );

    }

    // =========================
    // FORMULARIO CONTACTO
    // =========================

    const contactoForm = document.querySelector(
        'form[aria-label="Formulario de contacto"]'
    );

    if (contactoForm) {

        contactoForm.addEventListener(
            'submit',
            function (e) {

                e.preventDefault();

                alert(
                    'Mensaje enviado correctamente'
                );

                contactoForm.reset();

            }
        );

    }

});