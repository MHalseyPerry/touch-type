import React, { createContext, useContext, useState } from 'react';
import { useKeymaps } from '../hooks/useKeymaps';

const KeyboardLayoutContext = createContext();

export const useKeyboardLayouts = () => useContext(KeyboardLayoutContext);

export const KeyboardLayoutProvider = ({ children }) => {
  const keymaps = useKeymaps();

  const [primaryKeymap, setPrimaryKeymap] = useState('eng');
  const [secondaryKeymap, setSecondaryKeymap] = useState('eng');

  const value = {
    keymaps,

    primaryKeymapKey: primaryKeymap,
    primaryKeymap: keymaps[primaryKeymap],

    secondaryKeymapKey: secondaryKeymap,
    secondaryKeymap: keymaps[secondaryKeymap],

    setPrimaryKeymap,
    setSecondaryKeymap,
  };

  return (
    <KeyboardLayoutContext.Provider value={value}>
      {children}
    </KeyboardLayoutContext.Provider>
  );
};