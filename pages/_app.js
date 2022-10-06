import '@/styles/globals.css';
import { ThemeProvider } from '../context/state';

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
