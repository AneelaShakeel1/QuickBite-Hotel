import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/color';
import Icons from '../../assets/icons';

const BecomeAPartner = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [securePasswordEntry, setSecurePasswordEntry] = useState(true);
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleSecurePasswordEntry = () => {
    setSecurePasswordEntry(!securePasswordEntry);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Approval');
    }, 200);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}>
          <Icons.Arrow />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <Icons.UserPlusIcon />
        </View>
        <Text style={styles.title}>Become a QuickPartner</Text>
        <Text style={styles.subtitle}>
          Please put the details of your Hotel
        </Text>
        <View style={[styles.inputRow, {marginTop: 20}]}>
          <View style={[styles.inputContainer, {width: '48%'}]}>
            <Text style={styles.inputLabel}>Hotel Name</Text>
            <View style={[styles.inputWrapper, {paddingHorizontal: 12}]}>
              <TextInput
                placeholder="Enter your hotel name"
                placeholderTextColor={Colors.gray}
                style={[styles.textInput, {width: '100%', fontSize: 11}]}
              />
            </View>
          </View>
          <View style={[styles.inputContainer, {width: '48%'}]}>
            <Text style={styles.inputLabel}>Hotel Owner Name</Text>
            <View style={[styles.inputWrapper, {paddingHorizontal: 12}]}>
              <TextInput
                placeholder="Enter your name"
                placeholderTextColor={Colors.gray}
                style={[styles.textInput, {width: '100%', fontSize: 11}]}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={[styles.inputContainer, {width: '48.5%'}]}>
            <Text style={styles.inputLabel}>Hotel Address</Text>
            <View style={[styles.inputWrapper, {paddingHorizontal: 12}]}>
              <TextInput
                placeholder="Enter your hotel Address"
                placeholderTextColor={Colors.gray}
                style={[styles.textInput, {width: '100%', fontSize: 11}]}
              />
            </View>
          </View>
          <View style={[styles.inputContainer, {width: '48.5%'}]}>
            <Text style={styles.inputLabel}>Hotel Working Hours</Text>
            <View style={[styles.inputWrapper, {paddingHorizontal: 12}]}>
              <TextInput
                placeholder="12:00AM - 12:00PM"
                placeholderTextColor={Colors.gray}
                style={[styles.textInput, {width: '100%', fontSize: 11}]}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Hotel Email Address</Text>
          <View style={styles.inputWrapper}>
            <Icons.MailIcon />
            <TextInput
              placeholder="Enter your hotel email address"
              placeholderTextColor={Colors.gray}
              style={styles.textInput}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <Icons.LockIcon />
            <TextInput
              placeholder="Enter password"
              placeholderTextColor={Colors.gray}
              style={styles.textInput}
              secureTextEntry={securePasswordEntry}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={toggleSecurePasswordEntry}>
              {securePasswordEntry ? <Icons.EyeOff /> : <Icons.EyeIcon />}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: Colors.primary,
              width: '48%',
              borderRadius: 15,
              paddingVertical: 30,
              height: '100%',
              paddingHorizontal: 15,
            }}>
            <View style={{alignItems: 'center', gap: 7}}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: Colors.BGColor,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.ArrowUp />
              </View>
              <Text
                style={{
                  fontFamily: 'Manrope-Medium',
                  fontSize: 11,
                  color: Colors.gray,
                  textAlign: 'center',
                }}>
                Upload CNIC front & Back
              </Text>
            </View>
            <Text
              style={{
                fontFamily: 'Manrope-Medium',
                fontSize: 10,
                color: Colors.gray,
                textAlign: 'center',
                bottom: -20,
              }}>
              size 4mb
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: Colors.primary,
              width: '48%',
              borderRadius: 15,
              paddingHorizontal: 15,
              height: '100%',
              paddingVertical: 30,
            }}>
            <View style={{alignItems: 'center', gap: 7}}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: Colors.BGColor,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.ArrowUp />
              </View>
              <Text
                style={{
                  fontFamily: 'Manrope-Medium',
                  fontSize: 11,
                  color: Colors.gray,
                  textAlign: 'center',
                }}>
                Upload Hotel Logo
              </Text>
            </View>
            <Text
              style={{
                fontFamily: 'Manrope-Medium',
                fontSize: 10,
                color: Colors.gray,
                textAlign: 'center',
                bottom: -20,
              }}>
              size 4mb
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          activeOpacity={0.8}
          style={styles.termsRow}>
          <View style={styles.checkBox}>{checked && <Icons.RightTick />}</View>
          <Text style={styles.termsText}>I Agree to Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit}
          activeOpacity={0.8}
          style={styles.submitBtn}>
          {loading ? (
            <LottieView
              style={{height: 30, width: 30, marginVertical: -1}}
              source={require('../../assets/LottieFiles/whiteLoader.json')}
              autoPlay
              loop
            />
          ) : (
            <Text style={styles.submitBtnText}>Submit</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BecomeAPartner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  termsRow: {
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  termsText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.gray,
  },
  checkBox: {
    height: 25,
    width: 25,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 5,
    color: Colors.white,
  },
  subtitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: Colors.gray,
    paddingBottom: 10,
  },
  inputContainer: {
    gap: 5,
    paddingTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputLabel: {
    color: Colors.white,
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
  },
  inputWrapper: {
    paddingVertical: 5,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  textInput: {
    fontSize: 13,
    fontFamily: 'Manrope-Medium',
    color: Colors.gray,
    width: '80%',
  },
  submitBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
  },
  submitBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
});
