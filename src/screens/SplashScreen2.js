import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../constants/color';
import Icons from '../assets/icons';

const SplashScreen2 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.iconContainer}>
        <Icons.AppIcon />
      </View>
      <View style={styles.btnsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Auth', {screen: 'Login'})}
          style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Auth', {screen: 'BecomeAPartner'})}
          activeOpacity={0.8}
          style={styles.registerBtn}>
          <Text style={styles.registerBtnText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen2;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
  },
  iconContainer: {
    alignItems: 'center',
    height: '65%',
    justifyContent: 'center',
  },
  btnsContainer: {
    gap: 20,
  },
  loginBtn: {
    backgroundColor: Colors.btnColor,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
  },
  loginBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
  registerBtn: {
    backgroundColor: Colors.primary,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
  },
  registerBtnText: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: 'Manrope-Medium',
  },
});
