import React from 'react';
import {HomeScreen, AddMenu} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = createNativeStackNavigator();

const HomeNavigator = ({}) => (
  <>
    <Home.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{animation: 'slide_from_right'}}>
      <Home.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Home.Screen
        name={'AddMenu'}
        component={AddMenu}
        options={{headerShown: false}}
      />
    </Home.Navigator>
  </>
);

export default HomeNavigator;
