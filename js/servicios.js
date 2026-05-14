const contenedor = document.getElementById("contenedor-servicios");

const obtenerServicios = async () => {

    try {

        const respuesta = await fetch("https://tp1-prog3-791r.onrender.com/servicios");

        const servicios = await respuesta.json();

        servicios.forEach(servicio => {

            contenedor.innerHTML += `
                <article class="card">
                    <h4>${servicio.nombre}</h4>
                    <p>${servicio.descripcion}</p>
                    <div class="meta">
                        <span class="pill">Dev: ${servicio.desarrollador || 'Agus y Manu'}</span>
                        <span class="pill">Precio: $${servicio.precio || 'Consultar'}</span>
                    </div>
                </article>
            `;
        });

    } catch (error) {

        console.log("Error al cargar servicios:", error);
        contenedor.innerHTML = '<p class="error">Error al cargar servicios. Intenta nuevamente.</p>';
    }
};

obtenerServicios();