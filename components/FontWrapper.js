import { useFontContext } from '../contexts/FontContext';

export default function FontWrapper({ children }) {
  const { font } = useFontContext();

  return (
    <div style={{ fontFamily: font }}>
      {children}
    </div>
  );
}
