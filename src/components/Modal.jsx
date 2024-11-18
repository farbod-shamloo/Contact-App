import styles from "./Modal.module.css";

function Modal({ message, onConfirm, onCancel }) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <p>{message}</p>
        <div className={styles.actions}>
          <button onClick={onConfirm} className={styles.confirm}>
            تایید
          </button>
          <button onClick={onCancel} className={styles.cancel}>
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

