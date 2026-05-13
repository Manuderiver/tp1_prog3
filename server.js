const express = require("express");
const cors = require("cors");

const serviciosRoutes = require("./routes/serviciosRoutes");
const perfilRoutes = require("./routes/perfilRoutes");
const equipoRoutes = require("./routes/equipoRoutes");

const app = express();

const PORT = 3000;

// Middlewares
app.use(cors());

app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {

    res.send("Servidor funcionando correctamente");

});

// Rutas API
app.use("/servicios", serviciosRoutes);

app.use("/equipo", equipoRoutes);
app.use("/perfil", perfilRoutes);

// Levantar servidor
app.listen(PORT, () => {

    console.log(`Servidor corriendo en puerto ${PORT}`);

});