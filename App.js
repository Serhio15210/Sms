
import Tabs from "./navigation/Tabs";
import {NavigationContainer,DefaultTheme,DarkTheme} from "@react-navigation/native";
import {createContext, useState} from "react";
export const HistoryContext=createContext(null)
export default function App() {
    const [cardNumber,setCardNumber]=useState('')
  return (
      <HistoryContext.Provider value={{
            cardNumber,setCardNumber
      }}>
      <NavigationContainer >
        <Tabs/>
      </NavigationContainer>
      </HistoryContext.Provider>
  );
}


