import styles from "./ContactItem.module.css";

function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
  editHandler,
  toggleSelectHandler,
  isSelected,
}) {
  return (
    <li className={`${styles.item} ${isSelected ? styles.selected : ""}`}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => toggleSelectHandler(id)}
      />
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>✉️</span> {email}
      </p>
      <p>
        <span>📞</span> {phone}
      </p>
      <div className={styles.actions}>
        <button onClick={() => editHandler(id)}>✏️</button>
        <button onClick={() => deleteHandler(id)}>🗑️</button>
      </div>
    </li>
  );
}

export default ContactItem;
