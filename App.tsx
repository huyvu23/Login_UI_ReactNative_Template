/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PaperProvider} from 'react-native-paper';
import LoginScreen from './src/Login/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <>
      <PaperProvider>
        <SafeAreaProvider style={{flex: 1}}>
          <LoginScreen />
        </SafeAreaProvider>
      </PaperProvider>
    </>
  );
}

export default App;
