const mongoose = require('mongoose');
const Cliente = require('../models/Cliente');

// El frontend espera "id" (como FakeStore); Mongo usa "_id"
const formatear = (doc) => {
  const { _id, __v, ...resto } = doc;
  return { id: _id.toString(), ...resto };
};

const idValido = (id) => mongoose.isValidObjectId(id);

// GET /api/clientes
const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find().lean();
    res.json(clientes.map(formatear));
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener clientes' });
  }
};

// GET /api/clientes/:id
const obtenerClientePorId = async (req, res) => {
  const { id } = req.params;
  if (!idValido(id)) {
    return res.status(400).json({ mensaje: 'ID inválido' });
  }
  try {
    const cliente = await Cliente.findById(id).lean();
    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json(formatear(cliente));
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el cliente' });
  }
};

// POST /api/clientes
const crearCliente = async (req, res) => {
  const { email, name, phone, address } = req.body;
  if (!email || !name?.firstname || !phone || !address?.city) {
    return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
  }
  try {
    const nuevo = await Cliente.create(req.body);
    res.status(201).json(formatear(nuevo.toObject()));
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el cliente' });
  }
};

// PUT /api/clientes/:id
const actualizarCliente = async (req, res) => {
  const { id } = req.params;
  if (!idValido(id)) {
    return res.status(400).json({ mensaje: 'ID inválido' });
  }
  try {
    const actualizado = await Cliente.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    }).lean();
    if (!actualizado) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json(formatear(actualizado));
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el cliente' });
  }
};

// DELETE /api/clientes/:id
const eliminarCliente = async (req, res) => {
  const { id } = req.params;
  if (!idValido(id)) {
    return res.status(400).json({ mensaje: 'ID inválido' });
  }
  try {
    const eliminado = await Cliente.findByIdAndDelete(id).lean();
    if (!eliminado) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json(formatear(eliminado));
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el cliente' });
  }
};

module.exports = {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente
};