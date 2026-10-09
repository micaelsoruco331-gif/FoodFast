const mongoose = require('mongoose');


const clienteSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true },
    username: { type: String, trim: true },
    password: { type: String },
    name: {
      firstname: { type: String, required: true, trim: true },
      lastname: { type: String, default: '-', trim: true }
    },
    address: {
      city: { type: String, required: true, trim: true },
      street: { type: String, default: '' },
      number: { type: Number },
      zipcode: { type: String, default: '' }
    },
    phone: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cliente', clienteSchema);