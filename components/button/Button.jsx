import styles from './button.module.css';

export default function Button({ name, type, content, handler, state }) {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles[`${name}`]}
        name={name}
        type={type}
        onClick={(e) => handler(e, state)}
      >
        {content}
      </button>
    </div>
  );
}
