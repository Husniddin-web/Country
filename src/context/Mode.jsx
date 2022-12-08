import { useState, createContext } from "react";
export const ModeContext = createContext(null);
export default function ModeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem("mode") || false);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
