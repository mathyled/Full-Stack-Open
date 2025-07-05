import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import axios from "axios";
import notesService from "./services/notes";
function App() {
  const [contacts, setContacts] = useState([]);
  const [inputFilter, setInputFilter] = useState("");
  const [newContact, setNewContact] = useState({ name: "", number: 0 });

  useEffect(() => {
    notesService.getAll().then((response) => {
      setContacts(response.data);
    });
  }, []);
  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;

    setNewContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const existingContact = contacts.some(
      (contact) => contact.name === newContact.name
    );

    if (existingContact) {
      alert(`${newContact.name} is already added to phonebook`);
    } else {
      const newObject = {
        name: newContact.name,
        number: newContact.number,
      };
      axios;
      notesService.create(newObject).then((response) => {
        console.log(response);
        setContacts([...contacts, response.data]);
      });
    }
  };
  const handleDelete = (id) => {
    const newSelected = contacts.filter((person) => person.id !== id);
    const personToDelete = contacts.find((person) => person.id === id);
      console.log(personToDelete);
      if (window.confirm(`Delete ${personToDelete.name} ?`)) {
        setContacts(newSelected);
      }
  };

  
  const handlerFilterInput = (e) => {
    setInputFilter(e.target.value);
  };

  const selectedPerson =
    inputFilter.trim() === ""
      ? contacts
      : contacts.filter((contact) =>
          contact.name
            .toLocaleLowerCase()
            .includes(inputFilter.toLocaleLowerCase())
        );

  return (
    <>
      <h2>Phonebook</h2>
      <Filter
        handlerFilterInput={handlerFilterInput}
        inputFilter={inputFilter}
      />
      <h2>add a new</h2>
      <Form
        handleSubmit={handleSubmit}
        handleOnChangeInput={handleOnChangeInput}
      />
      <h2>Numbers</h2>
      <Persons persons={selectedPerson} handleDelete={handleDelete} />
    </>
  );
}

export default App;
