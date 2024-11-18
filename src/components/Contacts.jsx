import { useState } from "react";
import { v4 } from "uuid";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import Modal from "./Modal";
import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [alert, setAlert] = useState("");
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [modal, setModal] = useState({ isOpen: false, action: null });
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const openModal = (action) => {
    setModal({ isOpen: true, action });
  };

  const closeModal = () => {
    setModal({ isOpen: false, action: null });
  };

  const confirmAction = () => {
    if (modal.action) {
      modal.action();
    }
    closeModal();
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("لطفاً تمام فیلدها را پر کنید!");
      return;
    }

    openModal(() => {
      setAlert("");
      const newContact = { ...contact, id: v4() };

      setContacts((contacts) => [...contacts, newContact]);
      setContact({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
      });
    });
  };

  const deleteHandler = (id) => {
    openModal(() => {
      const newContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(newContacts);
    });
  };

  const toggleSelectHandler = (id) => {
    setSelectedContacts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  const deleteSelectedHandler = () => {
    openModal(() => {
      const newContacts = contacts.filter(
        (contact) => !selectedContacts.includes(contact.id)
      );
      setContacts(newContacts);
      setSelectedContacts([]);
    });
  };

  return (
    <>
      <div className={styles.container}>
        {modal.isOpen && (
          <Modal
            message="آیا از انجام این عملیات اطمینان دارید؟"
            onConfirm={confirmAction}
            onCancel={closeModal}
          />
        )}

        <div className={styles.form}>
          {inputs.map((input, index) => (
            <input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              value={contact[input.name]}
              onChange={changeHandler}
            />
          ))}

          <button onClick={addHandler}>اضافه کردن مخاطب</button>
          {selectedContacts.length > 0 && (
            <button onClick={deleteSelectedHandler}>حذف گروهی</button>
          )}
        </div>
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>

        <SearchBox onSearch={setSearchTerm} />
        <ContactList
          contacts={filteredContacts}
          deleteHandler={deleteHandler}
          editHandler={() => {}}
          toggleSelectHandler={toggleSelectHandler}
          selectedContacts={selectedContacts}
        />
      </div>
    </>
  );
}

export default Contacts;
