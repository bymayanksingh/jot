import '../styles/globals.css';
import { EntriesProvider } from '../contexts/EntriesContext';
import { FontProvider } from '../contexts/FontContext';
import FontWrapper from '../components/FontWrapper';

function MyApp({ Component, pageProps }) {
  return (
    <EntriesProvider>
      <FontProvider>
        <FontWrapper>
          <Component {...pageProps} />
        </FontWrapper>
      </FontProvider>
    </EntriesProvider>
  );
}

export default MyApp;