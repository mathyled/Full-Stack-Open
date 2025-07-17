import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import axios from "axios";
import notesService from "./services/notes";
import Notification from "./components/Notification";
function App() {
  const [contacts, setContacts] = useState(null);
  const [inputFilter, setInputFilter] = useState("");
  const [newContact, setNewContact] = useState({ name: "", number: 0 });
  const [sucessMessage, setSucessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    notesService.getAll().then((response) => {
      setContacts(response.data);
    });
  }, []);


  if(!contacts){
    return null;
  }
  
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
      if (
        window.confirm(
          `${newContact.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        console.log(isAdded.id);

        notesService
          .update(isAdded.id, newObject)
          .then((response) => {
            const updatedContacts = contacts.map((contact) =>
              contact.id === isAdded.id ? response.data : contact
            );
            setContacts(updatedContacts);
            setSucessMessage(`Update ${response.data.name}`);
            setTimeout(() => {
              setSucessMessage(null);
            }, 3000);
            console.log(`Update ${response.data.name}`);
          })
          .catch((error) => {
            setErrorMessage(
              `Information of ${isAdded.name} has already been removed from server`
            );
            console.log(error);
            setTimeout(() => {
              setErrorMessage(null);
            }, 2000);
          });
      }
      return;
    }
    notesService.create(newObject).then((response) => {
      setContacts([...contacts, response.data]);
      setSucessMessage(`Added ${response.data.name}`);
      setTimeout(() => {
        setSucessMessage(null);
      }, 5000);
    });
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
      <Notification type={"error"} message={errorMessage} />
      <Notification type={"added"} message={sucessMessage} />
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
