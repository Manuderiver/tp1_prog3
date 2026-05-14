document.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.getElementById('login-form');

    if (loginForm) {

        loginForm.addEventListener('submit', async function (e) {

            e.preventDefault();

            const email = document.getElementById('email').value;

            const password = document.getElementById('password').value;

            try {

                const response = await fetch(
                    'https://tp1-prog3-791r.onrender.com/login',
                    {
                        method: 'POST',

                        headers: {
                            'Content-Type': 'application/json',
                        },

                        body: JSON.stringify({
                            email,
                            password
                        }),
                    }
                );

                const data = await response.json();

                if (response.ok) {

                    // Guardar usuario
                    localStorage.setItem(
                        'user',
                        JSON.stringify(data.user)
                    );

                    alert('Login exitoso');

                    // Redirigir
                    window.location.href = './perfil.html';

                } else {

                    alert(data.mensaje);

                }

            } catch (error) {

                console.error('Error:', error);

                alert('Error de conexión con el servidor');

            }
        });
    }
});
