import styles from './button.module.css';

export default function Button({ name, type, content }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} name={name} type={type}>
        {content}
      </button>
    </div>
  );
}
