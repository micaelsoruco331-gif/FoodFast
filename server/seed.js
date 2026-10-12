// server/seed.js
// Carga clientes de ejemplo en MongoDB Atlas con la misma forma que el modelo Cliente.
// Es idempotente: usa el email como clave y no duplica ni borra nada.
// Uso (desde server/):  node seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Cliente = require('./models/Cliente');

const clientes = [
  { email: 'lucia.fernandez@mail.com', username: 'luciafernandez', name: { firstname: 'Lucía', lastname: 'Fernández' }, address: { city: 'San Salvador de Jujuy', street: 'Belgrano', number: 245, zipcode: '4600' }, phone: '3884551201' },
  { email: 'martin.quispe@mail.com', username: 'martinquispe', name: { firstname: 'Martín', lastname: 'Quispe' }, address: { city: 'San Salvador de Jujuy', street: 'Alvear', number: 810, zipcode: '4600' }, phone: '3884552302' },
  { email: 'carla.mamani@mail.com', username: 'carlamamani', name: { firstname: 'Carla', lastname: 'Mamani' }, address: { city: 'Palpalá', street: 'Av. Hipólito Yrigoyen', number: 130, zipcode: '4612' }, phone: '3884553403' },
  { email: 'diego.cruz@mail.com', username: 'diegocruz', name: { firstname: 'Diego', lastname: 'Cruz' }, address: { city: 'Perico', street: 'San Martín', number: 77, zipcode: '4608' }, phone: '3884554504' },
  { email: 'valentina.rios@mail.com', username: 'valentinarios', name: { firstname: 'Valentina', lastname: 'Ríos' }, address: { city: 'San Pedro de Jujuy', street: 'Sarmiento', number: 402, zipcode: '4500' }, phone: '3884555605' },
  { email: 'nicolas.vargas@mail.com', username: 'nicolasvargas', name: { firstname: 'Nicolás', lastname: 'Vargas' }, address: { city: 'Libertador General San Martín', street: 'Mitre', number: 59, zipcode: '4512' }, phone: '3884556706' },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);

  const resultado = await Cliente.bulkWrite(
    clientes.map((c) => ({
      updateOne: { filter: { email: c.email }, update: { $setOnInsert: c }, upsert: true },
    }))
  );

  console.log(`Insertados: ${resultado.upsertedCount} | Ya existían: ${clientes.length - resultado.upsertedCount}`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('Error en el seed:', err.message);
  process.exit(1);
});