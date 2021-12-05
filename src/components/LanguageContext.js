
import React, { useState, useContext } from "react";

const LanguageContext = React.createContext();
const UpdateLanguageContext = React.createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const useUpdateLanguage = () => {
  return useContext(UpdateLanguageContext);
};

export const LanguageProvider = ({ value, children }) => {
  const [language, setLanguage] = useState(value);
  return (
    <LanguageContext.Provider value={language}>
      <UpdateLanguageContext.Provider value={setLanguage}>
        {children}
      </UpdateLanguageContext.Provider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;