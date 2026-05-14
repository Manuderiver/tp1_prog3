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
│   └── authController.js
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
│   └── authRoutes.js
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