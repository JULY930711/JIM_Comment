import { createContext, useState } from "react";


const ThemeContext = createContext({});
export default ThemeContext;


export const ThemeContextProvider = ({children})=>{
  



  const [gameName, setGameName] = useState('等一個人盜墓');
  
 
  return (
    <ThemeContext.Provider value={ {gameName, setGameName} }>
      {children}
    </ThemeContext.Provider>
  )
}