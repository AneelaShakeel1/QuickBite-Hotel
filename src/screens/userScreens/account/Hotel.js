import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../constants/color';
import Icons from '../../../assets/icons';

const Hotel = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Umer Aftab Restaurant');
  const [email, setEmail] = useState('hotel@gmail.com');
  const [password, setPassword] = useState('123456789');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [avatarImage, setAvatarImage] = useState('');

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

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <Icons.Arrow />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Hotel Settings</Text>
        </View>
        <TouchableOpacity
          onPress={takeImageFromGallery}
          activeOpacity={0.8}
          style={styles.profilePictureContainer}>
          <Image
            source={
              avatarImage
                ? {uri: avatarImage}
                : require('../../../assets/images/Resort.png')
            }
            resizeMode="cover"
            style={styles.profileImage}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.editIcon}>
            <Icons.PenIcon />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.inputWrapper}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: 10,
            }}>
            <Text style={styles.inputLabel}>Hotel Name</Text>
            <Icons.PenIcon />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Umer Aftab Restaurant"
              style={styles.input}
              placeholderTextColor={Colors.gray}
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: 10,
            }}>
            <Text style={styles.inputLabel}>Hotel Email Address</Text>
            <Icons.PenIcon />
          </View>
          <View
            style={[
              styles.inputContainer,
              {flexDirection: 'row', alignItems: 'center', gap: 10},
            ]}>
            <Icons.MailIconWhite />
            <TextInput
              placeholder="hotel@gmail.com"
              style={styles.input}
              placeholderTextColor={Colors.gray}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: 10,
            }}>
            <Text style={styles.inputLabel}>Password</Text>
            <Icons.PenIcon />
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Icons.LockIconWhite />
              <TextInput
                placeholder="Enter Password"
                style={styles.input}
                placeholderTextColor={Colors.gray}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureTextEntry}
              />
            </View>
            <TouchableOpacity onPress={toggleSecureEntry}>
              {secureTextEntry ? <Icons.EyeOff /> : <Icons.EyeIcon />}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hotel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BGColor,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  saveBtn: {
    backgroundColor: Colors.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginVertical: 80,
  },
  saveBtnText: {
    color: Colors.darkBronze,
    fontSize: 15,
    fontFamily: 'Manrope-Bold',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    gap: 80,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Manrope-Medium',
    fontSize: 20,
    color: Colors.white,
  },
  profilePictureContainer: {
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 12,
  },
  profileImage: {
    width: 120,
    height: 120,
  },
  editIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  inputWrapper: {
    marginTop: 20,
    gap: 3,
  },
  inputLabel: {
    fontFamily: 'Manrope-Medium',
    fontSize: 15,
    color: Colors.white,
    marginBottom: 5,
  },
  inputContainer: {
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 5,
  },
  input: {
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
    color: Colors.white,
    width: '75%',
  },
});
