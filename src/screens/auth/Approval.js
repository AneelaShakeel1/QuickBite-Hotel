import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/color';
import Icons from '../../assets/icons';

const Approval = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Request');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <Icons.Approval />
      <Text style={styles.approval}>
        Approval <Text style={{color: Colors.white}}>is in</Text> Progress
      </Text>
      <Text style={styles.cv}>Please wait your CV is in progress</Text>
    </SafeAreaView>
  );
};

export default Approval;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  approval: {
    marginTop: 20,
    fontFamily: 'Manrope-SemiBold',
    fontSize: 50,
    color: Colors.btnColor,
    textAlign: 'center',
    lineHeight: 60,
  },
  cv: {
    fontFamily: 'Manrope-Medium',
    fontSize: 20,
    color: Colors.gray,
    textAlign: 'center',
    marginTop: 15,
    width: '50%',
    lineHeight: 27,
  },
});
