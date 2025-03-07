import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen1,
  SplashScreen2,
  Notifications,
  Hotel,
} from '../../screens';
import AuthNavigator from '../auth';
import BottomTabNavigation from '../bottomTab';

export const Stack = createNativeStackNavigator();

export const commonHeaderOptions = {headerShown: false};

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={'Splash1'}>
      <Stack.Screen
        name={'Splash1'}
        component={SplashScreen1}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Splash2'}
        component={SplashScreen2}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Auth'}
        component={AuthNavigator}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'BottomTabNavigation'}
        component={BottomTabNavigation}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Notifications'}
        component={Notifications}
        options={commonHeaderOptions}
      />
      <Stack.Screen
        name={'Hotel'}
        component={Hotel}
        options={commonHeaderOptions}
      />
    </Stack.Navigator>
  );
}
