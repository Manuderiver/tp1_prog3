skunk47
mderiver
En una llamada

kid agus — 12/05/2026 19:08
document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    // Verificar si est谩 logueado
    if (!token) {

message.txt
5 KB
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Agus y Manu - Mi perfil</title>

message.txt
3 KB
skunk47 — 12/05/2026 19:17
document.addEventListener('DOMContentLoaded', function () {

    cargarPerfil();

    async function cargarPerfil() {

message.txt
3 KB
<!doctype html>
<html lang="es">

<head>

    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Agus y Manu - Mi perfil</title>

    <meta name="description" content="Perfil de usuario" />

    <link rel="stylesheet" href="../css/styles.css" />

</head>

<body>

    <main id="contenido">

        <div class="container">

            <section class="section">

                <h2>Mi Perfil</h2>

                <!-- INFO USUARIO -->
                <div class="grid">

                    <article class="card">

                        <img
                            class="perfil-foto"
                            src=""
                            alt="Foto perfil"
                            width="120"
                        >

                        <h3 class="perfil-nombre">👤 Usuario</h3>

                        <p class="perfil-email">
                            <strong>Email:</strong>
                        </p>

                        <p class="perfil-registro">
                            <strong>Miembro desde:</strong>
                        </p>

                    </article>

                    <article class="card">

                        <h3>📋 Información personal</h3>

                        <p class="perfil-completo">
                            <strong>Nombre completo:</strong>
                        </p>

                    </article>

                </div>

                <!-- SERVICIOS -->
                <h3 style="margin-top: 24px; margin-bottom: 12px;">
                    Servicios solicitados
                </h3>

                <div class="grid servicios-grid"></div>

                <button id="logout-btn" class="btn">
                    Cerrar Sesión
                </button>

            </section>

        </div>

    </main>

    <script src="../js/perfil.js"></script>

</body>

</html>
skunk47
 ha iniciado una llamada que ha durado una hora. — ayer a las 20:25
kid agus — ayer a las 20:32
gonagus.fran11@gmail.com
kid agus — ayer a las 20:47
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Agus y Manu - Acceso</title>

message.txt
3 KB
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registroForm = document.getElementById('registro-form');

    // Login
    if (loginForm) {

message.txt
3 KB
skunk47 — ayer a las 20:54
document.addEventListener('DOMContentLoaded', function () {

    const loginForm = document.getElementById('login-form');

    if (loginForm) {

        loginForm.addEventListener('submit', async function (e) {

            e.preventDefault();

            const email = document.getElementById('email').value;

            const password = document.getElementById('password').value;

            try {

                const response = await fetch(
                    'http://localhost:3000/login',
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
kid agus — 15:31
que onda
kid agus
 ha iniciado una llamada. — 15:39
skunk47 — 15:44
https://chatgpt.com/share/6a02392c-9258-83e9-a9c9-13e1c9fdbfe4
ChatGPT
ChatGPT - Revisión TP1 y Base TP2
Shared via ChatGPT
Imagen
kid agus — 15:51
document.addEventListener('DOMContentLoaded', function () {

    const pedidoForm = document.querySelector('#contenido form');

    if (pedidoForm) {

        pedidoForm.addEventListener('submit', function (e) {

            e.preventDefault();

            alert('Pedido enviado exitosamente.');

            pedidoForm.reset();

        });

    }

});
skunk47 — 15:53
document.addEventListener('DOMContentLoaded', function () {

    const pedidoForm = document.querySelector('#contenido form');

    if (pedidoForm) {

        pedidoForm.addEventListener('submit', function (e) {

            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const telefono = document.getElementById('telefono').value;
            const email = document.getElementById('email').value;
            const servicio = document.getElementById('servicio').value;
            const fecha = document.getElementById('fecha').value;
            const canal = document.getElementById('canal').value;

            if (nombre && apellido && telefono && email && servicio && fecha && canal) {
                alert('Pedido enviado exitosamente.');
                pedidoForm.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }

        });

    }

});
kid agus — 16:00
# TP3 - Programación III

## Agus y Manu - Sitio Web + API REST

Proyecto desarrollado para la materia **Programación III**.

El trabajo consiste en la integración de:

* Frontend multipágina
* Backend con Node.js y Express
* API REST
* Formularios
* Login de usuarios
* Perfil dinámico
* Validaciones
* Deploy online

---

# Integrantes

* Agustín Gonzalez
* Juan Manuel Aguilar

---

# Tecnologías utilizadas

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express
* Nodemon
* CORS
* dotenv

---

# Funcionalidades

## Frontend

El sitio cuenta con las siguientes páginas:

* Home
* Servicios
* Equipo
* Pedido
* Contacto
* FAQ
* Login
* Registro
* Perfil

---

## Backend

La API REST permite:

* Obtener servicios
* Obtener integrantes del equipo
* Login de usuarios
* Obtener perfil de usuario

---

# Funcionalidades implementadas

## Login

Los usuarios pueden iniciar sesión mediante email y contraseña.

## Perfil dinámico

El perfil muestra:

* Nombre
* Email
* Fecha de registro
* Servicios solicitados

## Validaciones

Se implementaron validaciones en:

* Pedido
* Registro
* Login
* Contacto

## Responsive Design

El sitio es responsive y adaptable a distintos dispositivos.
... (153 líneas restantes)

message.txt
3 KB
# TP3 - Programación III

# Agus y Manu | Sitio Web + API REST

Proyecto académico desarrollado para la materia **Programación III**.

El objetivo principal del trabajo práctico fue transformar el sitio web realizado previamente en el TP1 en una aplicación más completa, incorporando:

* Backend con Node.js y Express
* API REST
* Integración frontend/backend
* Formularios funcionales
* Login de usuarios
* Perfil dinámico
* Validaciones
* Deploy online
* Trabajo colaborativo con Git y GitHub

---

# Integrantes

* Agustín Gonzalez
* Juan Manuel Aguilar

---

# Descripción general del proyecto

El proyecto consiste en un sitio web de servicios digitales desarrollado de forma multipágina utilizando HTML, CSS y JavaScript.

Durante el TP3 se agregó un backend desarrollado con Node.js y Express para poder:

* consumir datos desde archivos JSON
* crear endpoints REST
* simular login de usuarios
* mostrar perfiles dinámicos
* conectar frontend y backend
* realizar deploy online

El sistema permite navegar entre distintas secciones del sitio y además interactuar con funcionalidades dinámicas como:

* inicio de sesión
* visualización de perfiles
* validaciones de formularios
* consumo de API

---

# Tecnologías utilizadas

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express
* Nodemon
* dotenv
* cors

## Herramientas

* Git
* GitHub
* Visual Studio Code
* Render
* GitHub Pages
* Postman

---

# Funcionalidades del sitio

## Navegación multipágina

El sitio cuenta con múltiples páginas conectadas mediante navegación relativa.

Páginas implementadas:

* Home
* Servicios
* Equipo
* Pedido
* Contacto
* FAQ
* Login
* Registro
* Perfil

---

# Frontend

## Diseño responsive

... (407 líneas restantes)

message.txt
8 KB
# TP3 - Programación III

# Agus y Manu | Sitio Web + API REST

Proyecto académico desarrollado para la materia **Programación III**.

El objetivo principal del trabajo práctico fue transformar el sitio web realizado previamente en el TP1 en una aplicación más completa, incorporando:

* Backend con Node.js y Express
* API REST
* Integración frontend/backend
* Formularios funcionales
* Login de usuarios
* Perfil dinámico
* Validaciones
* Deploy online
* Trabajo colaborativo con Git y GitHub

---

# Integrantes

* Agustín Gonzalez
* Juan Manuel Aguilar

---

# Descripción general del proyecto

El proyecto consiste en un sitio web de servicios digitales desarrollado de forma multipágina utilizando HTML, CSS y JavaScript.

Durante el TP3 se agregó un backend desarrollado con Node.js y Express para poder:

* consumir datos desde archivos JSON
* crear endpoints REST
* simular login de usuarios
* mostrar perfiles dinámicos
* conectar frontend y backend
* realizar deploy online

El sistema permite navegar entre distintas secciones del sitio y además interactuar con funcionalidades dinámicas como:

* inicio de sesión
* visualización de perfiles
* validaciones de formularios
* consumo de API

---

# Tecnologías utilizadas

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express
* Nodemon
* dotenv
* cors

## Herramientas

* Git
* GitHub
* Visual Studio Code
* Render
* GitHub Pages
* Postman

---

# Funcionalidades del sitio

## Navegación multipágina

El sitio cuenta con múltiples páginas conectadas mediante navegación relativa.

Páginas implementadas:

* Home
* Servicios
* Equipo
* Pedido
* Contacto
* FAQ
* Login
* Registro
* Perfil

---

# Frontend

## Diseño responsive

... (407 líneas restantes)

message.txt
8 KB
﻿
# TP3 - Programación III

# Agus y Manu | Sitio Web + API REST

Proyecto académico desarrollado para la materia **Programación III**.

El objetivo principal del trabajo práctico fue transformar el sitio web realizado previamente en el TP1 en una aplicación más completa, incorporando:

* Backend con Node.js y Express
* API REST
* Integración frontend/backend
* Formularios funcionales
* Login de usuarios
* Perfil dinámico
* Validaciones
* Deploy online
* Trabajo colaborativo con Git y GitHub

---

# Integrantes

* Agustín Gonzalez
* Juan Manuel Aguilar

---

# Descripción general del proyecto

El proyecto consiste en un sitio web de servicios digitales desarrollado de forma multipágina utilizando HTML, CSS y JavaScript.

Durante el TP3 se agregó un backend desarrollado con Node.js y Express para poder:

* consumir datos desde archivos JSON
* crear endpoints REST
* simular login de usuarios
* mostrar perfiles dinámicos
* conectar frontend y backend
* realizar deploy online

El sistema permite navegar entre distintas secciones del sitio y además interactuar con funcionalidades dinámicas como:

* inicio de sesión
* visualización de perfiles
* validaciones de formularios
* consumo de API

---

# Tecnologías utilizadas

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express
* Nodemon
* dotenv
* cors

## Herramientas

* Git
* GitHub
* Visual Studio Code
* Render
* GitHub Pages
* Postman

---

# Funcionalidades del sitio

## Navegación multipágina

El sitio cuenta con múltiples páginas conectadas mediante navegación relativa.

Páginas implementadas:

* Home
* Servicios
* Equipo
* Pedido
* Contacto
* FAQ
* Login
* Registro
* Perfil

---

# Frontend

## Diseño responsive

El sitio fue desarrollado utilizando diseño responsive para adaptarse correctamente a:

* computadoras
* tablets
* dispositivos móviles

---

## Formularios

Se implementaron distintos formularios:

### Pedido de servicio

Permite solicitar servicios mediante un formulario dinámico.

### Contacto

Permite enviar consultas.

### Registro

Permite registrar usuarios.

### Login

Permite iniciar sesión.

---

## Validaciones implementadas

Se agregaron validaciones mediante JavaScript para:

* campos obligatorios
* emails válidos
* contraseñas
* formularios incompletos

---

# Backend

El backend fue desarrollado utilizando Express.

Se trabajó con:

* rutas
* controladores
* archivos JSON
* endpoints REST

---

# Estructura backend

## Controllers

Contienen la lógica de negocio.

## Routes

Definen los endpoints de la API.

## Data

Contiene archivos JSON utilizados como base de datos simulada.

## Models

Contienen la estructura de datos utilizada.

---

# Funcionalidades backend

## Servicios

Obtención de servicios desde JSON.

## Equipo

Obtención de integrantes del equipo.

## Login

Validación de usuarios mediante email.

## Perfil

Obtención de información dinámica del usuario.

---

# API REST

## Endpoints implementados

### Servicios

```bash
GET /servicios
```

Obtiene todos los servicios.

---

```bash
GET /servicios/:id
```

Obtiene un servicio por ID.

---

### Equipo

```bash
GET /equipo
```

Obtiene los integrantes del equipo.

---

### Login

```bash
POST /login
```

Permite iniciar sesión.

Ejemplo:

```json
{
  "email": "manuaguilar420@gmail.com"
}
```

---

### Perfil

```bash
GET /perfil/:id
```

Obtiene información del perfil.

---

# Usuarios simulados

El sistema utiliza usuarios simulados cargados en archivos JSON.

## Usuarios disponibles

### Juan Manuel Aguilar

```bash
manuaguilar420@gmail.com
```

---

### Agustín Gonzalez

```bash
gonagus.fran11@gmail.com
```

---

# Estructura del proyecto

```bash
TP3/
│
├── assets/
├── controllers/
│   ├── equipoController.js
│   ├── perfilController.js
│   ├── serviciosController.js
│  
│
├── css/
│   └── styles.css
│
├── data/
│   ├── equipo.json
│   ├── perfil.json
│   ├── servicios.json
│   └── usuarios.json
│
├── js/
│   ├── equipo.js
│   ├── login.js
│   ├── perfil.js
│   ├── registro.js
│   ├── servicios.js
│   └── validaciones.js
│
├── models/
├── pages/
│   ├── login.html
│   ├── perfil.html
│   └── registro.html
│
├── routes/
│   ├── equipoRoutes.js
│   ├── perfilRoutes.js
│   ├── serviciosRoutes.js
│   
│
├── contacto.html
├── equipo.html
├── faq.html
├── index.html
├── pedido.html
├── servicios.html
├── server.js
├── package.json
└── README.md
```

---

# Instalación del proyecto

## 1. Clonar repositorio

```bash
git clone https://github.com/Manuderiver/tp1_prog3.git
```

---

## 2. Ingresar al proyecto

```bash
cd tp1_prog3
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

## 4. Ejecutar servidor

```bash
npm run dev
```

---

# Servidor local

```bash
http://localhost:3000
```

---

# Deploy del proyecto

## Frontend online

GitHub Pages:

[https://manuderiver.github.io/tp1_prog3/](https://manuderiver.github.io/tp1_prog3/)

---

## Backend online

Render:

[https://tp1-prog3-791r.onrender.com](https://tp1-prog3-791r.onrender.com)

---

# Integración frontend/backend

El frontend consume información desde la API REST utilizando fetch.

Se implementó integración para:

* login
* perfil
* servicios
* equipo

---

# Trabajo colaborativo

El proyecto fue desarrollado utilizando ramas de Git.

## Rama backend

```bash
feature-backend-manuel
```

Contiene:

* Express
* rutas
* controladores
* endpoints
* deploy backend

---

## Rama frontend

```bash
feature-frontend-agustin
```

Contiene:

* frontend
* formularios
* validaciones
* integración frontend/backend
* deploy frontend

---

# Flujo de trabajo utilizado

## Git

Se trabajó utilizando:

* ramas
* commits
* push
* pull
* merge

---

# Herramientas de prueba

## Postman

Se utilizó Postman para probar:

* GET
* POST
* endpoints REST
* respuestas JSON

---

# Objetivos cumplidos

* Desarrollo frontend multipágina
* Backend con Node.js y Express
* API REST funcional
* Integración frontend/backend
* Login funcional
* Perfil dinámico
* Formularios funcionales
* Validaciones JavaScript
* Deploy online
* Responsive Design
* Uso de Git y GitHub
* Trabajo colaborativo

---

# Estado del proyecto

Proyecto finalizado y funcionando correctamente.

---

# Links del proyecto

## Repositorio GitHub

[https://github.com/Manuderiver/tp1_prog3](https://github.com/Manuderiver/tp1_prog3)

---

## Frontend

[https://manuderiver.github.io/tp1_prog3/](https://manuderiver.github.io/tp1_prog3/)

---

## Backend

[https://tp1-prog3-791r.onrender.com](https://tp1-prog3-791r.onrender.com)