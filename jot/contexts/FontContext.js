import React, { createContext, useState, useContext } from 'react';

const FontContext = createContext();

export function useFontContext() {
  return useContext(FontContext);
}

export function FontProvider({ children }) {
  const [font, setFont] = useState('Inter');

  const changeFont = (newFont) => {
    setFont(newFont);
  };

  return (
    <FontContext.Provider value={{ font, changeFont }}>
      {children}
    </FontContext.Provider>
  );
}
