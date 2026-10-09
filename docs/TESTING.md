# Registro de pruebas

Pruebas del backend de FoodFast realizadas con Thunder Client (VS Code) contra el servidor local `http://localhost:3001`.

**Entorno:** Node.js + Express + MongoDB Atlas
**Responsable:** Sofía Verdeja

## Puntos de control

| Punto de control | Resultado | Captura |
|---|---|---|
| El frontend corre en `localhost:5173` sin errores | Pendiente | |
| El servidor responde en `localhost:3001` | Pendiente | |
| Los datos persisten en MongoDB Atlas | Pendiente | |

## Pruebas de la API

| N° | Prueba | Método y URL | Resultado esperado | Resultado obtenido | Estado | Captura |
|---|---|---|---|---|---|---|
| 1 | Estado del servidor y la base | GET `/api/health` | `status: ok` y `mongodb: conectado` | Pendiente | Pendiente | |
| 2 | Listar clientes | GET `/api/clientes` | Lista de clientes (puede estar vacía) | Pendiente | Pendiente | |
| 3 | Crear cliente | POST `/api/clientes` | Devuelve el cliente creado con su `_id` | Pendiente | Pendiente | |
| 4 | Obtener cliente por id | GET `/api/clientes/:id` | Devuelve el cliente creado en la prueba 3 | Pendiente | Pendiente | |
| 5 | Actualizar cliente | PUT `/api/clientes/:id` | Devuelve el cliente con el teléfono modificado | Pendiente | Pendiente | |
| 6 | Eliminar cliente | DELETE `/api/clientes/:id` | Confirma la eliminación | Pendiente | Pendiente | |
| 7 | Cliente inexistente | GET `/api/clientes/:id` con un id eliminado | Responde con error, no con un cliente | Pendiente | Pendiente | |
| 8 | Crear sin campos obligatorios | POST `/api/clientes` con cuerpo vacío | Responde con error de validación | Pendiente | Pendiente | |
| 9 | Persistencia | Ver la colección en MongoDB Atlas | El cliente de la prueba 3 aparece guardado | Pendiente | Pendiente | |