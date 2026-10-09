# FoodFast

Panel de gestión de pedidos y clientes para locales de comida take away. Proyecto grupal de LyEP 2026.

## Estructura del proyecto

```
FoodFast/
├── client/   Frontend (React + Vite)
└── server/   Backend (Node.js + Express + MongoDB Atlas)
```

## Requisitos

- Node.js y npm instalados.
- Acceso a la base de datos del equipo en MongoDB Atlas (cadena de conexión).

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/micaelsoruco331-gif/FoodFast.git
cd FoodFast
```

### 2. Backend (server/)

```bash
cd server
npm install
```

Crear el archivo `server/.env` con este contenido:

```
PORT=3001
MONGODB_URI=<cadena de conexión de MongoDB Atlas>
```

El archivo `.env` no se sube al repositorio. La cadena de conexión se pide al responsable de la base de datos del equipo.

Levantar el servidor:

```bash
node server.js
```

Si todo está bien, la terminal muestra:

```
Servidor corriendo en http://localhost:3001
Conectado a MongoDB Atlas
```

### 3. Frontend (client/)

En otra terminal:

```bash
cd client
npm install
npm run dev
```

La aplicación abre en `http://localhost:5173`.

## Variables de entorno (server/.env)

| Variable | Obligatoria | Descripción |
|---|---|---|
| `PORT` | No | Puerto del servidor. Por defecto 3001. |
| `MONGODB_URI` | Sí | Cadena de conexión a MongoDB Atlas. |

## API REST

URL base: `http://localhost:3001`

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/health` | Estado del servidor y de la conexión a MongoDB |
| GET | `/api/clientes` | Lista todos los clientes |
| GET | `/api/clientes/:id` | Obtiene un cliente por su id |
| POST | `/api/clientes` | Crea un cliente |
| PUT | `/api/clientes/:id` | Actualiza un cliente |
| DELETE | `/api/clientes/:id` | Elimina un cliente |

### Modelo Cliente

| Campo | Tipo | Obligatorio |
|---|---|---|
| `email` | String | Sí |
| `username` | String | No |
| `password` | String | No |
| `name.firstname` | String | Sí |
| `name.lastname` | String | No (por defecto `-`) |
| `address.city` | String | Sí |
| `address.street` | String | No |
| `address.number` | Number | No |
| `address.zipcode` | String | No |
| `phone` | String | Sí |

Los campos `createdAt` y `updatedAt` los agrega MongoDB automáticamente.

### Ejemplo de cuerpo para POST /api/clientes

```json
{
  "email": "juan.perez@mail.com",
  "username": "juanperez",
  "password": "123456",
  "name": { "firstname": "Juan", "lastname": "Pérez" },
  "address": {
    "city": "San Salvador de Jujuy",
    "street": "Belgrano",
    "number": 120,
    "zipcode": "4600"
  },
  "phone": "3884123456"
}
```