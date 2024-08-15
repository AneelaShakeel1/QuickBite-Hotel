import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Account = () => {
  const navigation = useNavigation();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setIsOpened(false)}>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.BGColor}}>
        <View style={[styles.screen, {opacity: isOpened ? 0.75 : 1}]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}>
                <Icons.Arrow />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Account</Text>
            </View>
            <View style={styles.hotelInfo}>
              <Icons.HotelIcon />
              <View style={{gap: -4}}>
                <Text style={styles.hotelName}>Hotel Name</Text>
                <Text style={styles.hotelEmail}>hotel2024@gmail.com</Text>
              </View>
            </View>
            <View style={styles.btnsContainer}>
              <TouchableOpacity
                onPress={() => setIsOpened(!isOpened)}
                activeOpacity={0.8}
                style={styles.btn}>
                <Icons.Clock />
                <Text style={styles.btnText}>Hotel Schedule</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notifications')}
                activeOpacity={0.8}
                style={styles.btn}>
                <Icons.Notification />
                <Text style={styles.btnText}>Notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                <Icons.VoucherRound />
                <Text style={styles.btnText}>Vouchers</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.creditContainer}>
              <View style={styles.creditRow}>
                <Icons.CreditIcon />
                <Text style={styles.creditText}>Credit</Text>
              </View>
              <Text style={styles.creditPrice}>Rs 30,000</Text>
            </View>
            <View style={{marginTop: 40}}>
              <Text style={styles.Title}>Others</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Hotel')}
                activeOpacity={0.8}
                style={styles.item}>
                <View style={styles.itemRow}>
                  <Icons.SettingsGray />
                  <Text style={styles.itemTitle}>Hotel settings</Text>
                </View>
                <Icons.RightGrayDropDown />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.item}>
                <View style={styles.itemRow}>
                  <Icons.SpecialDeals />
                  <Text style={styles.itemTitle}>Special Deals</Text>
                </View>
                <Icons.RightGrayDropDown />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.item}>
                <View style={styles.itemRow}>
                  <Icons.Music />
                  <Text style={styles.itemTitle}>Customer Support</Text>
                </View>
                <Icons.RightGrayDropDown />
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.logOut}>
              <Text style={styles.logOutText}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.deleteBtn}>
              <Text style={styles.deleteBtnText}>Delete Account</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {isOpened ? (
          <View
            style={{
              marginHorizontal: 20,
              paddingHorizontal: 20,
              paddingTop: 22,
              backgroundColor: Colors.primary,
              position: 'absolute',
              alignSelf: 'center',
              borderRadius: 15,
              height: 270,
              top: '40%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Manrope-Medium',
                  fontSize: 17,
                  color: Colors.btnColor,
                }}>
                Hotel Schedule
              </Text>
              <TouchableOpacity
                onPress={() => setIsOpened(!isOpened)}
                activeOpacity={0.8}
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: Colors.BGColor,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icons.CrossIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.inputRow}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Opening Hours</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    placeholder="Enter Opening Hours"
                    placeholderTextColor={Colors.gray}
                    style={styles.textInput}
                  />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Closing Hours</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    placeholder="Enter Closing Hours"
                    placeholderTextColor={Colors.gray}
                    style={styles.textInput}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setIsOpened(!isOpened)}
              activeOpacity={0.8}
              style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Account;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: Colors.EerieBlack,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  creditRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  creditText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.gray,
  },
  creditPrice: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.btnColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 100,
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  logOut: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 60,
    borderWidth: 1,
    borderColor: Colors.btnColor,
  },
  logOutText: {
    color: Colors.btnColor,
    fontSize: 15,
    fontFamily: 'Manrope-Medium',
  },
  deleteBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  deleteBtnText: {
    color: Colors.red,
    fontSize: 15,
    fontFamily: 'Manrope-Medium',
  },
  hotelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingTop: 40,
    paddingBottom: 20,
  },
  hotelName: {
    fontFamily: 'Manrope-Medium',
    fontSize: 22,
    color: Colors.white,
  },
  hotelEmail: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 15,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '32%',
  },
  btnText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 11,
    color: Colors.gray,
  },
  Title: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.white,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
  },
  itemTitle: {
    fontFamily: 'Manrope-Meidum',
    fontSize: 13,
    color: Colors.gray,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    gap: 5,
    paddingTop: 20,
    width: '49%',
  },
  inputLabel: {
    color: Colors.white,
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    paddingLeft: 5,
  },
  inputWrapper: {
    paddingVertical: 3,
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    fontFamily: 'Manrope-Medium',
    color: Colors.btnColor,
    width: '100%',
    fontSize: 11,
  },
  saveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 13,
    marginTop: 25,
    backgroundColor: Colors.btnColor,
  },
  saveBtnText: {
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
    color: Colors.darkBronze,
  },
});
