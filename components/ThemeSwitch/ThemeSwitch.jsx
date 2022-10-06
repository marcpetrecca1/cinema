import styles from './themeswitch.module.css';
import Button from '../Button';
import { useTheme } from '../../context/state';

export default function ThemeSwitch() {
  const { themeState, toggleTheme } = useTheme();
  console.log('themeState from ThemeSwitch component', themeState);
  return (
    <div className={styles.themeSwitchContainer}>
      <div>Change to {themeState ? 'dark mode' : 'light mode'}</div>
      <div className={styles.buttonContainer}>
        <Button
          name={themeState ? 'goGrey' : 'goWhite'}
          handler={(e) => toggleTheme(e, themeState)}
          content='+'
          type='text'
          state={themeState}
        />
      </div>
    </div>
  );
}
