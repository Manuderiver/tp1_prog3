// Funcionalidad del Perfil
document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    // Verificar si está logueado
    if (!token) {
        alert('Debes iniciar sesión primero');
        window.location.href = './login.html';
        return;
    }

    // Mostrar datos del usuario si están en localStorage
    if (user) {
        mostrarDatosUsuario(user);
    }

    // Cargar datos actualizados del servidor
    cargarPerfil();

    async function cargarPerfil() {
        try {
            const response = await fetch('http://localhost:3000/perfil', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                mostrarDatosUsuario(data.user);
                mostrarServicios(data.servicios || []);
            } else if (response.status === 401) {
                // Token expirado
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                alert('Sesión expirada. Inicia sesión nuevamente.');
                window.location.href = './login.html';
            } else {
                console.error('Error al cargar perfil');
            }
        } catch (error) {
            console.error('Error de conexión:', error);
        }
    }

    function mostrarDatosUsuario(user) {
        // Actualizar nombre
        const nombreElement = document.querySelector('h3');
        if (nombreElement) {
            nombreElement.textContent = `👤 ${user.nombre} ${user.apellido}`;
        }

        // Actualizar email
        const emailElement = document.querySelector('p strong');
        if (emailElement && emailElement.nextSibling) {
            emailElement.nextSibling.textContent = user.email;
        }

        // Buscar y actualizar otros campos
        const infoCards = document.querySelectorAll('.card p');
        infoCards.forEach(p => {
            if (p.textContent.includes('Nombre completo:')) {
                p.innerHTML = `<strong>Nombre completo:</strong> ${user.nombre} ${user.apellido}`;
            }
            if (p.textContent.includes('Email:')) {
                p.innerHTML = `<strong>Email:</strong> ${user.email}`;
            }
            if (p.textContent.includes('Fecha de nacimiento:')) {
                p.innerHTML = `<strong>Fecha de nacimiento:</strong> ${user.fechaNacimiento || 'No especificada'}`;
            }
            if (p.textContent.includes('Miembro desde:')) {
                p.innerHTML = `<strong>Miembro desde:</strong> ${new Date(user.fechaRegistro).getFullYear()}`;
            }
        });
    }

    function mostrarServicios(servicios) {
        const serviciosContainer = document.querySelector('.grid');
        if (!serviciosContainer) return;

        // Limpiar servicios existentes (excepto las tarjetas de usuario)
        const userCards = serviciosContainer.querySelectorAll('.card');
        userCards.forEach(card => {
            if (card.querySelector('h3') && !card.querySelector('h4')) {
                // Mantener tarjetas de usuario
            } else {
                card.remove();
            }
        });

        // Agregar servicios
        servicios.forEach(servicio => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <h4>${servicio.nombre}</h4>
                <p>Solicitado el ${new Date(servicio.fecha).toLocaleDateString('es-ES')}</p>
            `;
            serviciosContainer.appendChild(card);
        });
    }

    // Botón de cerrar sesión
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = './login.html';
            }
        });
    }
});