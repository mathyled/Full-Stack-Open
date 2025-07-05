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

    const isAdded = contacts.find(
      (contact) => contact.name === newContact.name
    );

    const newObject = {
      name: newContact.name,
      number: newContact.number,
    };

    if (isAdded) {
      window.confirm(
        `${newContact.name} is already added to phonebook, replace the old number with a new one?`
      );
      console.log(isAdded.id);

      notesService
        .update(isAdded.id, newObject)
        .then((response) => {
          const updatedContacts = contacts.map((contact) =>
            contact.id === isAdded.id ? response.data : contact
          );
          setContacts(updatedContacts);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      notesService.create(newObject).then((response) => {
        console.log(response);
        setContacts([...contacts, response.data]);
      });
    }
  };
  const handleDelete = (id) => {
    const personToDelete = contacts.find((person) => person.id === id);
    console.log(personToDelete);
    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      notesService.deletePerson(personToDelete.id).then((response) => {
        const newSelected = contacts.filter(
          (person) => person.id !== response.data.id
        );
        setContacts(newSelected);
      });
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
