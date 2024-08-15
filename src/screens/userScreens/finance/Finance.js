import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {BarChart} from 'react-native-chart-kit';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const {width: screenWidth} = Dimensions.get('window');

const Finance = () => {
  const [selectedTab, setSelectedTab] = useState('Daily');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Icons.Arrow />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Finance</Text>
        </View>
        <View style={styles.btnsContainer}>
          <View style={styles.btnsRow}>
            <TouchableOpacity
              onPress={() => setSelectedTab('Daily')}
              activeOpacity={0.8}
              style={
                selectedTab === 'Daily' ? styles.activeBtn : styles.inActiveBtn
              }>
              <Text
                style={
                  selectedTab === 'Daily'
                    ? styles.activeBtnText
                    : styles.inActiveBtnText
                }>
                Daily
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedTab('Weekly')}
              activeOpacity={0.8}
              style={
                selectedTab === 'Weekly' ? styles.activeBtn : styles.inActiveBtn
              }>
              <Text
                style={
                  selectedTab === 'Weekly'
                    ? styles.activeBtnText
                    : styles.inActiveBtnText
                }>
                Weekly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedTab('Monthly')}
              activeOpacity={0.8}
              style={
                selectedTab === 'Monthly'
                  ? styles.activeBtn
                  : styles.inActiveBtn
              }>
              <Text
                style={
                  selectedTab === 'Monthly'
                    ? styles.activeBtnText
                    : styles.inActiveBtnText
                }>
                Monthly
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.yearSelector}>
            <Text style={styles.yearText}>2024</Text>
            <Icons.DownArrow />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: 12,
            backgroundColor: Colors.EerieBlack,
            borderRadius: 12,
            marginTop: 15,
          }}>
          <BarChart
            data={{
              labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
              datasets: [
                {
                  data: [
                    600, 500, 700, 825, 725, 1000, 900, 875, 557, 325, 568, 666,
                    400, 455, 377,
                  ],
                },
              ],
            }}
            width={screenWidth / 1.11}
            height={200}
            chartConfig={{
              barRadius: 3,
              backgroundGradientFrom: Colors.EerieBlack,
              backgroundGradientTo: Colors.EerieBlack,
              barPercentage: 0.35,
              decimalPlaces: 0,
              color: () => Colors.btnColor,
              fillShadowGradient: Colors.btnColor,
              fillShadowGradientFromOffset: 1,
              fillShadowGradientOpacity: 1,
              labelColor: () => Colors.gray,
            }}
            withInnerLines={false}
            showBarTops={false}
            segments={2}
            hidePointsAtIndex={[1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13]}
            yLabelsOffset={26}
            xLabelsOffset={5}
            fromZero={true}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{position: 'absolute', top: '7%', left: '31.5%'}}>
            <Icons.graphValueBG />
            <Text
              style={{
                position: 'absolute',
                top: '15%',
                left: '16%',
                fontFamily: 'Manrope-Bold',
                color: Colors.darkBronze,
                fontSize: 13,
              }}>
              825
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View
            style={{
              width: '48%',
              backgroundColor: Colors.EerieBlack,
              borderRadius: 12,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Manrope-SemiBold',
                fontSize: 50,
                color: Colors.btnColor,
              }}>
              30k
            </Text>
            <Text
              style={{
                fontFamily: 'Manrope-SemiBold',
                fontSize: 13,
                color: Colors.gray,
              }}>
              Total Earnings
            </Text>
          </View>
          <View
            style={{
              width: '48%',
              backgroundColor: Colors.EerieBlack,
              borderRadius: 12,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Manrope-SemiBold',
                fontSize: 50,
                color: Colors.btnColor,
              }}>
              50k
            </Text>
            <Text
              style={{
                fontFamily: 'Manrope-SemiBold',
                fontSize: 13,
                color: Colors.gray,
              }}>
              Orders Completed
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            backgroundColor: Colors.EerieBlack,
            borderRadius: 12,
            padding: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Manrope-SemiBold',
              fontSize: 13,
              color: Colors.white,
            }}>
            Available for withdraw
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'Manrope-SemiBold',
                fontSize: 50,
                color: Colors.btnColor,
              }}>
              22k
            </Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.withDraw}>
              <Text style={styles.withDrawText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Finance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 10,
  },
  goBackButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 100,
    marginBottom: 25,
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: Colors.white,
  },
  btnsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 10,
    width: '60%',
  },
  activeBtn: {
    backgroundColor: Colors.btnColor,
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 18,
  },
  inActiveBtn: {
    backgroundColor: Colors.EerieBlack,
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 18,
  },
  activeBtnText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 13,
    color: Colors.darkBronze,
  },
  inActiveBtnText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 13,
    color: Colors.gray,
  },
  yearSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 10,
    width: '26%',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  yearText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
  withDraw: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 10,
    backgroundColor: Colors.btnColor,
    width: '65%',
  },
  withDrawText: {
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
    color: Colors.darkBronze,
  },
});
