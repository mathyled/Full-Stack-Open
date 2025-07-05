import axios from "axios";
const baseUrl="http://localhost:3001/persons";



const getAll = () => {
    return axios.get(baseUrl)
};

const create = (newNote) => {
    return axios.post(baseUrl,newNote)
}

export default {
    getAll,
    create
}

