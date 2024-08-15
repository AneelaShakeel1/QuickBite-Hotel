import React from 'react';
import {
  LoginScreen,
  BecomeAPartner,
  Approval,
  Request
} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();

const AuthNavigator = ({}) => (
  <>
    <Auth.Navigator
      initialRouteName={'Login'}
      screenOptions={{animation: 'slide_from_right'}}>
      <Auth.Screen
        name={'Login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={'BecomeAPartner'}
        component={BecomeAPartner}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={'Approval'}
        component={Approval}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={'Request'}
        component={Request}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  </>
);

export default AuthNavigator;
