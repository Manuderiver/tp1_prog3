const contenedorEquipo = document.getElementById("contenedor-equipo");

const obtenerEquipo = async () => {

    try {

        const respuesta = await fetch("http://localhost:3000/equipo");

        const integrantes = await respuesta.json();

        integrantes.forEach(persona => {

            contenedorEquipo.innerHTML += `
                <article class="card">
                    <h3>${persona.nombre}</h3>
                    <p>${persona.rol}</p>
                    <p><strong>Email:</strong> ${persona.email}</p>
                </article>
            `;
        });

    } catch (error) {

        console.log("Error al cargar equipo:", error);
        contenedorEquipo.innerHTML = '<p class="error">Error al cargar equipo. Intenta nuevamente.</p>';
    }
};

obtenerEquipo();