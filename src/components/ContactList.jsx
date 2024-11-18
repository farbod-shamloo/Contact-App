import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";

function ContactList({
  contacts,
  deleteHandler,
  editHandler,
  toggleSelectHandler,
  selectedContacts,
}) {
  return (
    <div className={styles.container}>
      <h3>لیست مخاطبین</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
              toggleSelectHandler={toggleSelectHandler}
              isSelected={selectedContacts.includes(contact.id)}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>هنوز مخاطبی اضافه نشده است!</p>
      )}
    </div>
  );
}

export default ContactList;
