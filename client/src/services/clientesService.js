import axios from "axios";

const URL = "https://fakestoreapi.com/users";

// Crea un nuevo cliente en la API
const crearCliente = async (cliente) => {
  const respuesta = await axios.post(URL, cliente);
  return respuesta.data;
};

// Trae la lista completa de clientes desde la API
const obtenerClientes = async () => {
  const respuesta = await axios.get(URL);
  return respuesta.data;
};

// Trae un cliente puntual por su id
const obtenerClientePorId = async (id) => {
  const respuesta = await axios.get(`${URL}/${id}`);
  return respuesta.data;
};

// Elimina un cliente por su id
const eliminarCliente = async (id) => {
  const respuesta = await axios.delete(`${URL}/${id}`);
  return respuesta.data;
};

export default {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  eliminarCliente,
};