const contenedorEquipo = document.getElementById("contenedor-equipo");

const obtenerEquipo = async () => {

    try {

        const respuesta = await fetch("http://localhost:3000/equipo");

        const integrantes = await respuesta.json();

        integrantes.forEach(persona => {

            contenedorEquipo.innerHTML += `
                <div class="card-equipo">
                    <h3>${persona.nombre}</h3>
                    <p>${persona.rol}</p>
                    <p>${persona.email}</p>
                </div>
            `;
        });

    } catch (error) {

        console.log("Error:", error);

    }
};

obtenerEquipo();