/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import Onboarding from './src/screens/auth/onboarding';

function App(): JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <Onboarding />
    </View>
  );
}

export default App;
