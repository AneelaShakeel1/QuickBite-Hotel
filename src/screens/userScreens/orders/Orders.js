import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState('DeliveredOrders');
  const [isOpened, setIsOpened] = useState(false);
  const [deliverTime, setDeliverTime] = useState('');
  const [rating, setRating] = useState(3.5);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => setIsOpened(false)}>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.BGColor}}>
        <View style={[styles.container, {opacity: isOpened ? 0.25 : 1}]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}>
                <Icons.Arrow />
              </TouchableOpacity>
              <Text style={styles.headerText}>Orders</Text>
            </View>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                onPress={() => setSelectedTab('LiveOrders')}
                activeOpacity={0.8}
                style={[
                  styles.tabButton,
                  styles.liveOrderButton,
                  selectedTab === 'LiveOrders' && styles.activeTab,
                ]}>
                <Text
                  style={[
                    styles.tabButtonText,
                    selectedTab === 'LiveOrders'
                      ? styles.activeTabText
                      : styles.inActiveTabText,
                  ]}>
                  Live Orders
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedTab('DeliveredOrders')}
                activeOpacity={0.8}
                style={[
                  styles.tabButton,
                  styles.deliveredOrderButton,
                  selectedTab === 'DeliveredOrders' && styles.activeTab,
                ]}>
                <Text
                  style={[
                    styles.tabButtonText,
                    selectedTab === 'DeliveredOrders'
                      ? styles.activeTabText
                      : styles.inActiveTabText,
                  ]}>
                  Delivered Orders
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.orderDetailsCard}>
              <Text style={styles.orderDetailsTitle}>Order Details</Text>
              <View style={styles.itemRow}>
                <Text style={styles.itemDescription}>
                  1x Double decker with extra cheese
                </Text>
                <Text style={styles.itemPrice}>Rs 450</Text>
              </View>
              <View style={styles.itemRow}>
                <Text style={styles.itemDescription}>
                  1x Tikka Pizza small with extra cheese
                </Text>
                <Text style={styles.itemPrice}>Rs 350</Text>
              </View>
              <View style={styles.itemRow}>
                <Text style={styles.deliveryChargeLabel}>Delivery charge</Text>
                <Text style={styles.deliveryChargeValue}>Rs 100</Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>Rs 900</Text>
              </View>
              <Text style={styles.riderDetailsTitle}>Rider Details</Text>
              <View style={styles.riderInfoContainer}>
                <View style={styles.riderProfile}>
                  <Image
                    source={require('../../../assets/images/userProfile.jpg')}
                    resizeMode="cover"
                    style={styles.riderImage}
                  />
                  <View>
                    <Text style={styles.riderName}>Umer Aftab</Text>
                    <Text style={styles.riderRole}>Rider</Text>
                  </View>
                </View>
                <View style={styles.riderDetails}>
                  <Text style={styles.riderLabel}>Bike Plate No</Text>
                  <Text style={styles.riderValue}>HDD -6565</Text>
                </View>
              </View>
              <View style={styles.otpDeliveryRow}>
                <View style={styles.otpContainer}>
                  <Text style={styles.otpLabel}>OTP for Rider</Text>
                  <Text style={styles.otpValue}>2266</Text>
                </View>
                <View style={styles.deliveryContainer}>
                  <Text style={styles.deliveryLabel}>Deliver to Rider</Text>
                  <Text style={styles.deliveryValue}>
                    {selectedTab === 'DeliveredOrders'
                      ? '10mins'
                      : deliverTime || '?'}
                  </Text>
                </View>
              </View>
              {selectedTab === 'LiveOrders' ? (
                <View style={styles.requestBtns}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setIsOpened(!isOpened)}
                    style={styles.acceptBtn}>
                    <Text style={styles.acceptBtnText}>Accept</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.declineBtn}>
                    <Text style={styles.declineBtnText}>Declined</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingLabel}>Rating</Text>
                  <StarRating
                    rating={rating}
                    onChange={setRating}
                    maxStars={5}
                    starSize={23}
                    color={Colors.btnColor}
                    emptyColor={Colors.gray}
                    starStyle={{marginHorizontal: 2}}
                  />
                </View>
              )}
            </TouchableOpacity>
          </ScrollView>
        </View>
        {isOpened ? (
          <View
            style={{
              backgroundColor: Colors.primary,
              position: 'absolute',
              alignSelf: 'center',
              borderRadius: 15,
              height: 270,
              top: '40%',
              padding: 30,
            }}>
            <Text
              style={{
                fontFamily: 'Manrope-Medium',
                fontSize: 16,
                color: Colors.white,
              }}>
              Deliver to Rider
            </Text>
            <Text
              style={{
                fontFamily: 'Manrope-Medium',
                fontSize: 14,
                color: Colors.gray,
                marginTop: 15,
              }}>
              Please specify the delivery time for the rider.
            </Text>
            <View
              style={{
                backgroundColor: Colors.BGColor,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
                marginTop: 15,
                paddingVertical: 3,
              }}>
              <TextInput
                placeholder="Enter Delivery Time"
                placeholderTextColor={Colors.gray}
                style={{
                  color: Colors.white,
                  fontFamily: 'Manrope-Medium',
                  fontSize: 15,
                  width: '80%',
                  textAlign: 'center',
                }}
                value={deliverTime}
                onChangeText={setDeliverTime}
              />
            </View>
            <TouchableOpacity
              onPress={() => setIsOpened(!isOpened)}
              activeOpacity={0.8}
              style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
    gap: 100,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  tabContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 15,
  },
  liveOrderButton: {
    width: '50%',
    backgroundColor: Colors.EerieBlack,
  },
  deliveredOrderButton: {
    width: '53%',
    backgroundColor: Colors.EerieBlack,
    marginLeft: -10,
  },
  activeTab: {
    backgroundColor: Colors.btnColor,
    zIndex: 1,
  },
  tabButtonText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
  },
  activeTabText: {
    color: Colors.darkBronze,
  },
  inActiveTabText: {
    color: Colors.gray,
  },
  orderDetailsCard: {
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    gap: 15,
    marginHorizontal: 20,
  },
  orderDetailsTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
    paddingBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDescription: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
    width: 120,
  },
  itemPrice: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
  },
  deliveryChargeLabel: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
    width: 120,
  },
  deliveryChargeValue: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.gray,
    fontSize: 13,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
  },
  totalLabel: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.white,
    fontSize: 16,
    width: 120,
  },
  totalValue: {
    fontFamily: 'Manrope-SemiBold',
    color: Colors.btnColor,
    fontSize: 16,
  },
  riderDetailsTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
    marginTop: 20,
  },
  riderInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  riderProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  riderImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  riderName: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.white,
  },
  riderRole: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
  riderDetails: {
    alignItems: 'flex-end',
  },
  riderLabel: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: Colors.white,
  },
  riderValue: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
    color: Colors.gray,
  },
  otpDeliveryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
  },
  submitBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    backgroundColor: Colors.btnColor,
    marginTop: 15,
  },
  submitBtnText: {
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
    color: Colors.darkBronze,
  },
  otpContainer: {
    gap: 5,
  },
  otpLabel: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
  },
  otpValue: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.btnColor,
  },
  deliveryContainer: {
    gap: 5,
    alignItems: 'flex-end',
  },
  deliveryLabel: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
  },
  deliveryValue: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.btnColor,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
  },
  ratingLabel: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
  },
  requestBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  acceptBtn: {
    width: '48%',
    padding: 15,
    backgroundColor: Colors.btnColor,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptBtnText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 15,
    color: Colors.darkBronze,
  },
  declineBtn: {
    width: '48%',
    padding: 15,
    backgroundColor: Colors.red,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  declineBtnText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 15,
    color: Colors.darkRed,
  },
});
