import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../constants/color';
import Icons from '../assets/icons';

const SplashScreen1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Splash2');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Icons.AppIcon />
      <Text style={styles.mainText}>
        Smart <Text style={styles.highlightedText}>and</Text> Quick Growth{' '}
        <Text style={styles.highlightedText}>for Your</Text> Restaurant!
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 17,
    color: Colors.btnColor,
    width: '75%',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10,
  },
  highlightedText: {
    fontFamily: 'Montserrat-Regular',
    color: Colors.white,
  },
});
