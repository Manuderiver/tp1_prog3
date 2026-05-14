document.addEventListener('DOMContentLoaded', function () {

    const user = JSON.parse(localStorage.getItem('user'));

    // Verificar si hay sesión
    if (!user) {

        window.location.href = './login.html';

        return;
    }

    cargarPerfil();

    async function cargarPerfil() {

        try {

            const response = await fetch(
                `https://tp1-prog3-791r.onrender.com/perfil/${user.id}`
            );

            const data = await response.json();

            mostrarDatosUsuario(data);

            mostrarServicios(
                data.pedidos.map(pedido => ({
                    nombre: pedido,
                    fecha: new Date()
                }))
            );

        } catch (error) {

            console.error('Error al cargar perfil:', error);

        }
    }

    function mostrarDatosUsuario(user) {

        // Nombre principal
        const nombreElement = document.querySelector('.perfil-nombre');

        if (nombreElement) {

            nombreElement.textContent = `👤 ${user.nombre} ${user.apellido}`;

        }

        // Email
        const emailElement = document.querySelector('.perfil-email');

        if (emailElement) {

            emailElement.innerHTML =
                `<strong>Email:</strong> ${user.email}`;

        }

        // Registro
        const registroElement = document.querySelector('.perfil-registro');

        if (registroElement) {

            registroElement.innerHTML = `
                <strong>Miembro desde:</strong>
                ${new Date(user.fechaRegistro).getFullYear()}
            `;

        }

        // Nombre completo
        const completoElement = document.querySelector('.perfil-completo');

        if (completoElement) {

            completoElement.innerHTML = `
                <strong>Nombre completo:</strong>
                ${user.nombre} ${user.apellido}
            `;

        }

        // Foto
        const fotoElement = document.querySelector('.perfil-foto');

        if (fotoElement && user.foto) {

            fotoElement.src = user.foto;

            fotoElement.alt = user.nombre;

        }
    }

    function mostrarServicios(servicios) {

        const serviciosContainer =
            document.querySelector('.servicios-grid');

        if (!serviciosContainer) return;

        serviciosContainer.innerHTML = '';

        servicios.forEach(servicio => {

            const card = document.createElement('article');

            card.className = 'card';

            card.innerHTML = `
                <h4>${servicio.nombre}</h4>
                <p>
                    Solicitado el
                    ${new Date(servicio.fecha)
                        .toLocaleDateString('es-ES')}
                </p>
            `;

            serviciosContainer.appendChild(card);

        });
    }

    // Cerrar sesión
    const logoutBtn = document.getElementById('logout-btn');

    if (logoutBtn) {

        logoutBtn.addEventListener('click', function () {

            localStorage.removeItem('user');

            alert('Sesión cerrada');

            window.location.href = './login.html';

        });
    }

});