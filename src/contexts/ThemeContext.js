import { createContext, useState } from "react";


const ThemeContext = createContext({});
export default ThemeContext;


export const ThemeContextProvider = ({children})=>{
  



  const [gameSid, setGameSid] = useState(0);
  
 
  return (
    <ThemeContext.Provider value={ {gameSid, setGameSid} }>
      {children}
    </ThemeContext.Provider>
  )
}