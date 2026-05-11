const contenedor = document.getElementById("contenedor-servicios");

const obtenerServicios = async () => {

    try {

        const respuesta = await fetch("http://localhost:3000/servicios");

        const servicios = await respuesta.json();

        servicios.forEach(servicio => {

            contenedor.innerHTML += `
                <div class="card-servicio">
                    <h3>${servicio.nombre}</h3>
                    <p>${servicio.descripcion}</p>
                </div>
            `;
        });

    } catch (error) {

        console.log("Error al cargar servicios:", error);

    }
};

obtenerServicios();