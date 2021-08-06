import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/navigation/Routes';
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen';

export default function App() {
  return (
      <PaperProvider>
        <Routes />
        {/* <LoginScreen/> */}
      </PaperProvider>
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
