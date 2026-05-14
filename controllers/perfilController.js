const fs = require("fs").promises;
const path = require("path");

const obtenerPerfil = async (req, res) => {

    try {

        const { id } = req.params;

        const rutaUsuarios = path.join(__dirname, "../data/usuarios.json");

        const dataUsuarios = await fs.readFile(rutaUsuarios, "utf-8");

        const usuarios = JSON.parse(dataUsuarios);

        const usuarioEncontrado = usuarios.find(
            usuario => usuario.id == id
        );

        if (!usuarioEncontrado) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        const perfil = {
            id: usuarioEncontrado.id,
            nombre: usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido,
            email: usuarioEncontrado.email,
            fechaRegistro: usuarioEncontrado.fechaRegistro,
            pedidos: usuarioEncontrado.pedidos
        };

        res.status(200).json(perfil);

    } catch (error) {

        console.log("Error al obtener perfil:", error);

        res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
};

module.exports = {
    obtenerPerfil
};