
import Tabs from "./navigation/Tabs";
import {NavigationContainer,DefaultTheme,DarkTheme} from "@react-navigation/native";
import React, {createContext, useState} from "react";
import {AppProvider} from "./provider/AppProvider";



export default function App() {

  return (


        <AppProvider>
      <NavigationContainer >
        <Tabs/>
      </NavigationContainer>
        </AppProvider>


  );
}


