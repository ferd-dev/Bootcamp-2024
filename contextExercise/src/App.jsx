/**
 * 
 * Your goal is to modify the application so that when you click the toggle button,
 * the favorite programming language toggles between the items in the languages array.
 * The default value should be the first item in the array.
 *
 * You must use the Context API for this challenge, which means you have to use the createContext
 * and Context.Provider functions. You are free to add classes and styles,
 * but make sure you leave the component ID's and clases provided as they are.
 *
 * Submit your code once it is complete.
 */

import { createContext, useContext, useState } from "react";

const languages = ['JavaScript', 'Python'];
const LanguageContext = createContext();

export default function App() {
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  const toggleLanguage = () => {
    setFavoriteLanguage((prev) => {
      return prev === languages[0] ? languages[1] : languages[0];
    });
  }

  return (
    <LanguageContext.Provider value={{ favoriteLanguage, toggleLanguage }}>
      <MainSection />
    </LanguageContext.Provider>
  );
}


function MainSection() {
  const { favoriteLanguage, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="card">
      <p id="favoriteLanguage">favorite programing language: {favoriteLanguage}</p>
      <button id="changeFavorite" onClick={toggleLanguage}>toggle language</button>
    </div>
  )
}

