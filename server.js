const express = require("express");

const cors = require("cors");

require("dotenv").config();

const serviciosRoutes = require("./routes/serviciosRoutes");

const equipoRoutes = require("./routes/equipoRoutes");

const perfilRoutes = require("./routes/perfilRoutes");

const loginRoutes = require("./routes/loginRoutes");

const app = express();

const PORT = process.env.PORT || 3000;


// Middlewares
app.use(cors());

app.use(express.json());


// Rutas
app.use("/servicios", serviciosRoutes);

app.use("/equipo", equipoRoutes);

app.use("/perfil", perfilRoutes);

app.use("/login", loginRoutes);


// Ruta principal
app.get("/", (req, res) => {

    res.json({
        mensaje: "API funcionando correctamente"
    });

});


// Servidor
app.listen(PORT, () => {

    console.log(`Servidor corriendo en puerto ${PORT}`);

});