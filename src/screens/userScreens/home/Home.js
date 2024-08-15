import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Home</Text>
        <View style={styles.actionButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home', {screen: 'AddMenu'})}
            activeOpacity={0.8}
            style={styles.actionButton}>
            <View style={styles.iconWrapper}>
              <Icons.PlusBlack />
            </View>
            <Text style={styles.actionButtonText}>Add Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.actionButton}>
            <View style={styles.iconWrapper}>
              <Icons.PlusBlack />
            </View>
            <Text style={styles.actionButtonText}>Create Deal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuTitle}>Menu - 01</Text>
            <Text style={styles.menuCategory}>Burgers</Text>
          </View>
          <View style={styles.menuItemsContainer}>
            <View style={styles.menuItem}>
              <Icons.PenIcon height={13} width={13} style={styles.editIcon} />
              <Icons.BeefBurger />
              <Text style={styles.menuItemName}>Burger</Text>
              <Text style={styles.menuItemPrice}>Rs 350</Text>
            </View>
            <View style={styles.addProductContainer}>
              <View style={styles.addProductIconWrapper}>
                <Icons.PlusBlack height={18} width={18} />
              </View>
              <Text style={styles.addProductText}>Add Product</Text>
            </View>
          </View>
        </View>
        <View style={styles.dealsContainer}>
          <Text style={styles.dealsTitle}>Deals</Text>
          <View style={styles.dealItemContainer}>
            <View>
              <View style={styles.dealItem}>
                <Icons.BeefBurger />
                <Text style={styles.dealItemName}>Burger</Text>
                <Text style={styles.dealItemPrice}>Rs 350</Text>
              </View>
              <View style={styles.dealItemActions}>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>15% off</Text>
                </View>
                <Icons.PenIcon height={13} width={13} />
              </View>
            </View>
            <View style={styles.createDealContainer}>
              <View style={styles.createDealIconWrapper}>
                <Icons.PlusBlack height={18} width={18} />
              </View>
              <Text style={styles.createDealText}>Create Deal</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  pageTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
  },
  actionButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  actionButton: {
    width: '48%',
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 5,
    paddingVertical: 25,
  },
  iconWrapper: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 17,
    color: Colors.white,
  },
  menuContainer: {
    marginTop: 15,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    padding: 20,
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
    marginBottom: 10,
  },
  menuTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.white,
  },
  menuCategory: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.btnColor,
  },
  menuItemsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  menuItem: {
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  editIcon: {
    alignSelf: 'flex-end',
    top: -5,
    right: -15,
  },
  menuItemName: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.white,
  },
  menuItemPrice: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.btnColor,
  },
  addProductContainer: {
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addProductIconWrapper: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addProductText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.white,
  },
  dealsContainer: {
    marginTop: 15,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 12,
    padding: 20,
  },
  dealsTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.btnColor,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#89898975',
  },
  dealItemContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  dealItem: {
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingBottom: 15,
    alignItems: 'center',
    paddingTop: 40,
    position: 'relative',
  },
  dealItemName: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.white,
  },
  dealItemPrice: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.btnColor,
  },
  dealItemActions: {
    position: 'absolute',
    top: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  discountBadge: {
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
  },
  discountText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 10,
    color: Colors.darkBronze,
  },
  createDealContainer: {
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  createDealIconWrapper: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createDealText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.white,
  },
});
