import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/color';
import Icons from '../../assets/icons';

const Request = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <Icons.Accept />
      <Text style={styles.congrats}>Congratulations</Text>
      <Text style={styles.request}>
        Your Request has been Accepted. You can now start selling
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomTabNavigation')}
        activeOpacity={0.8}
        style={styles.homePageBtn}>
        <Text style={styles.homePageBtnText}>View Homepage</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Request;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congrats: {
    marginTop: 20,
    fontFamily: 'Manrope-SemiBold',
    fontSize: 40,
    color: Colors.btnColor,
    textAlign: 'center',
    lineHeight: 60,
  },
  request: {
    fontFamily: 'Manrope-Medium',
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 15,
    width: '90%',
    lineHeight: 27,
  },
  homePageBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 30,
    width: '100%',
  },
  homePageBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
});
