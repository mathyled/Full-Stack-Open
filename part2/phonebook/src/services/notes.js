import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newNote) => {
  return axios.post(baseUrl, newNote);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const update = (id, numberObject) => {
  return axios.put(`${baseUrl}/${id}`, numberObject);
};

export default {
  getAll,
  create,
  deletePerson,
  update,
};
