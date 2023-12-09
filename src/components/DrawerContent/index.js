/* eslint-disable prettier/prettier */
import React from 'react';
import { Linking, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import colors from '../../constants/colors';
import { PRIVACY_POLICY_LINK, TERMS_AND_CONDITIONS } from '../../constants/links';
import { View } from 'react-native';

const DrawerContent = (props) => {
  const { navigation } = props
  const logout = async () => {
    auth()
          .signOut()
          .then(() => console.log('user signed out') );
  }
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.link} onPress={()=>{navigation.navigate('Home')}}>Home</Text>
        <Text style={styles.link} onPress={()=>{navigation.navigate('Tasks')}}>Tasks</Text>
        <Text style={styles.link} onPress={()=>{Linking.openURL(PRIVACY_POLICY_LINK)}}>Privacy Policy</Text>
        <Text style={styles.link} onPress={()=>{Linking.openURL(TERMS_AND_CONDITIONS)}}>Terms and Conditions</Text>
        <Text style={styles.link} onPress={logout}>Log out</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.grey,
  },
  link: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 15,
    margin: 8,
    marginHorizontal: 16,
  }
})
export default React.memo(DrawerContent);
