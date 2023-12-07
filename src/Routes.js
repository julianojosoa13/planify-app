/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';

import Onboarding from './screens/auth/Onboarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Signup';

import Home from './screens/app/Home';
import Tasks from './screens/app/Tasks';
import AddTask from './screens/app/AddTask';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



const Routes = () => {
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
  
  // if (user) {
  //   const logout = async () => {
  //     auth()
  //           .signOut()
  //           .then(() => console.log('user signed out') );
  //   }
  //   return (
  //   <>
  //     <Text style={{margin: 48}}>Welcome</Text>
  //     <Text style={{margin: 48}} onPress={logout}>Log out!</Text>
  //   </>
  //   )
  // }  

  if (user) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator>
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

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({focused}) => {
            return <Image 
                    source={focused? require('./assets/home-active.png') : require('./assets/home-inactive.png')} 
                    style={styles.icon}
                  />
          }
        }}  
      />
      <Tab.Screen 
        name="Tasks" 
        component={Tasks} 
        options={{
          tabBarIcon: ({focused}) => {
            return <Image 
                      source={ focused? require('./assets/tasks-active.png') : require('./assets/tasks-inactive.png')} 
                      style={styles.icon}
                   />
          },
        }}  
      />
    </Tab.Navigator>
  )
};

export default Routes;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})

