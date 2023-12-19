/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/store';

import Routes from './src/Routes';

function App(): JSX.Element {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    }
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
