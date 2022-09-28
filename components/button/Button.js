import styles from './button.module.css';

export default function Button({ name, type, content }) {
  return (
    <button className={`${styles[`${name}`]}`} name={name} type={type}>
      {content}
    </button>
  );
}
