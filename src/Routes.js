/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import Onboarding from './screens/auth/Onboarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';
import { Text } from 'react-native';

const Stack = createStackNavigator();

function Routes() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  console.log('user :>> ', user)
  
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  
  if(user) {
    const logout = async () => {
      auth()
            .signOut()
            .then(() => console.log('user signed out') );
    }
    return (
    <>
      <Text style={{margin: 48}}>Welcome</Text>
      <Text style={{margin: 48}} onPress={logout}>Log out!</Text>
    </>
    )
  }
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
