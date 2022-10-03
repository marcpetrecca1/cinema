import styles from './button.module.css';

export default function Button({ name, type, content, handler }) {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.button}
        name={name}
        type={type}
        onClick={(e) => handler(e)}
      >
        {content}
      </button>
    </div>
  );
}
