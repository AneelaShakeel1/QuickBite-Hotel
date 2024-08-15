import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import LottieView from 'lottie-react-native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const AddMenu = () => {
  const [avatarImage, setAvatarImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [des, setDesc] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    if (title && name && price && des&&avatarImage) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('HomeScreen');
      }, 200);
    }
  };

  const takeImageFromGallery = async () => {
    try {
      const res = await ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
        mediaType: 'photo',
      });

      if (res.path) {
        setAvatarImage(res.path);
      } else {
        console.log('No image selected');
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => setIsOpened(false)}>
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.BGColor}}>
        <View style={[styles.safeArea, {opacity: isOpened ? 0.25 : 1}]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.pageTitle}>Home</Text>
            <View style={styles.MenuDetailsCard}>
              <View style={styles.addMenuContainer}>
                <Text style={styles.addMenuText}>Add Menu</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.cancelBtn}>
                  <Text style={styles.cancelBtnText}>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Menu Title</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    placeholder="Enter Title"
                    placeholderTextColor={Colors.gray}
                    value={title}
                    onChangeText={text => setTitle(text)}
                    style={styles.textInput}
                  />
                  <TouchableOpacity activeOpacity={0.8}>
                    {title ? <Icons.DownArrowYellow /> : <Icons.DownArrow />}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.inputRow}>
                <View style={[styles.inputContainer, {width: '49%'}]}>
                  <Text style={styles.inputLabel}>Product Name</Text>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      placeholder="Enter Product Name"
                      placeholderTextColor={Colors.gray}
                      style={[
                        styles.textInput,
                        {
                          width: '100%',
                          fontSize: 11,
                        },
                      ]}
                      value={name}
                      onChangeText={text => setName(text)}
                    />
                  </View>
                </View>
                <View style={[styles.inputContainer, {width: '49%'}]}>
                  <Text style={styles.inputLabel}>Product Price</Text>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      placeholder="Enter Product Price"
                      placeholderTextColor={Colors.gray}
                      style={[
                        styles.textInput,
                        {
                          width: '100%',
                          fontSize: 11,
                        },
                      ]}
                      value={price}
                      onChangeText={text => setPrice(text)}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Product Description</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    placeholder="Please write product description..."
                    placeholderTextColor={Colors.gray}
                    style={[styles.textInput, {width: '100%'}]}
                    multiline
                    numberOfLines={5}
                    textAlignVertical="top"
                    value={des}
                    onChangeText={text => setDesc(text)}
                  />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Product Image</Text>
                <TouchableOpacity
                  onPress={takeImageFromGallery}
                  activeOpacity={0.8}
                  style={styles.uploadImageContainer}>
                  {avatarImage ? (
                    <>
                      <Image
                        source={{uri: avatarImage}}
                        resizeMode="cover"
                        style={styles.profileImage}
                      />
                      <TouchableOpacity
                        onPress={() => setAvatarImage('')}
                        activeOpacity={0.8}
                        style={{
                          height: 30,
                          width: 30,
                          backgroundColor: Colors.primary,
                          borderRadius: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          top: '20%',
                          right: 15,
                        }}>
                        <Icons.CrossIcon />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      <Icons.ArrowUp />
                      <Text style={styles.uploadImageText}>
                        Upload Product Image
                      </Text>
                    </>
                  )}
                </TouchableOpacity>
              </View>
              <Text
                onPress={() => setIsOpened(!isOpened)}
                style={styles.discountText}>
                Offers / Discount
              </Text>
              <Text style={styles.addProductText}>Add Product{'    '}+</Text>
              <TouchableOpacity
                onPress={handleSave}
                activeOpacity={0.8}
                style={[
                  styles.saveBtn,
                  {
                    backgroundColor:
                      title && name && price && des && avatarImage
                        ? Colors.btnColor
                        : Colors.BGColor,
                  },
                ]}>
                {loading ? (
                  <LottieView
                    style={{height: 30, width: 30, marginVertical: -1}}
                    source={require('../../../assets/LottieFiles/whiteLoader.json')}
                    autoPlay
                    loop
                  />
                ) : (
                  <Text
                    style={[
                      styles.saveBtnText,
                      {
                        color:
                          title && name && price && des && avatarImage
                            ? Colors.darkBronze
                            : Colors.gray,
                      },
                    ]}>
                    Save Product
                  </Text>
                )}
              </TouchableOpacity>
            </View>
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
              height: 250,
              top: '40%',
            }}>
            <View style={styles.inputRow}>
              <View style={[styles.inputContainer, {width: '49%'}]}>
                <Text style={[styles.inputLabel, {paddingLeft: 5}]}>
                  Discount
                </Text>
                <View style={[styles.inputWrapper, {paddingHorizontal: 20}]}>
                  <TextInput
                    placeholder="Enter Discount"
                    placeholderTextColor={Colors.gray}
                    style={[
                      styles.textInput,
                      {
                        width: '100%',
                        fontSize: 12,
                      },
                    ]}
                  />
                </View>
              </View>
              <View style={[styles.inputContainer, {width: '49%'}]}>
                <Text style={[styles.inputLabel, {paddingLeft: 5}]}>
                  Min Speed
                </Text>
                <View style={[styles.inputWrapper, {paddingHorizontal: 20}]}>
                  <TextInput
                    placeholder="Enter Min Speed"
                    placeholderTextColor={Colors.gray}
                    style={[
                      styles.textInput,
                      {
                        width: '100%',
                        fontSize: 12,
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setIsOpened(!isOpened)}
              activeOpacity={0.8}
              style={styles.discountBtn}>
              <Text style={styles.discountBtnText}>Apply Discount</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddMenu;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: Colors.BGColor,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    paddingBottom: 40,
  },
  profileImage: {
    width: 60,
    height: 60,
  },
  MenuDetailsCard: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: Colors.EerieBlack,
    borderRadius: 15,
  },
  addMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  addMenuText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
    color: Colors.btnColor,
  },
  cancelBtn: {
    paddingHorizontal: 15,
    borderWidth: 0.75,
    borderColor: Colors.gray,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  cancelBtnText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.gray,
  },
  inputContainer: {
    gap: 5,
    paddingTop: 20,
  },
  inputLabel: {
    color: Colors.white,
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
  },
  uploadImageContainer: {
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 35,
  },
  uploadImageText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    color: Colors.gray,
  },
  discountText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 13,
    color: Colors.white,
    paddingTop: 15,
  },
  addProductText: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 13,
    color: Colors.btnColor,
    paddingTop: 15,
  },
  inputWrapper: {
    paddingVertical: 5,
    backgroundColor: Colors.BGColor,
    borderRadius: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 13,
    fontFamily: 'Manrope-Medium',
    color: Colors.btnColor,
    width: '80%',
  },
  saveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 35,
  },
  saveBtnText: {
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
  discountBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 25,
    backgroundColor: Colors.btnColor,
  },
  discountBtnText: {
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
    color: Colors.darkBronze,
  },
});
