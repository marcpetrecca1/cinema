import styles from './themeswitch.module.css';
import Button from '../Button/Button';
import { useTheme } from '../../context/state';

export default function ThemeSwitch() {
  const { themeState, toggleTheme } = useTheme();

  return (
    <div className={styles.themeSwitchContainer}>
      <div className={styles.themeSwitchText}>
        Change to {themeState ? 'dark mode' : 'light mode'}
      </div>
      <div className={styles.buttonContainer}>
        <Button
          name={themeState ? 'goGrey' : 'goWhite'}
          handler={(e) => toggleTheme(e)}
          content='+'
          type='text'
          state={themeState}
        />
      </div>
    </div>
  );
}
