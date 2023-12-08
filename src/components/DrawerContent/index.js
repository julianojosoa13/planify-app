/* eslint-disable prettier/prettier */
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Text } from 'react-native';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text>MENU</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default React.memo(DrawerContent)
