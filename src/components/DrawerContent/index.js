/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text>MENU</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default React.memo(DrawerContent)
