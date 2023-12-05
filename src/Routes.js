/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './screens/auth/Onboarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}
    >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default Routes;
