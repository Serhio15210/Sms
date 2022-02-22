import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from "./navigation/Tabs";
import {NavigationContainer,DefaultTheme,DarkTheme} from "@react-navigation/native";
import NavigationDarkTheme from "@react-navigation/native/src/theming/DarkTheme";
import PaperDarkTheme from "@react-navigation/native/src/theming/DarkTheme";
export default function App() {
  return (
      <NavigationContainer >
        <Tabs/>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});