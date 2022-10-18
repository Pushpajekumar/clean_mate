import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Pressable, TouchableWithoutFeedback, Keyboard} from 'react-native';
import NavigationStrings from '../../constants/NavigationStrings.js'
import Logo from '../../../assets/images/Logo.jpeg'
import CustomInput from '../../components/CustomInput';
import CustomInput2 from '../SignUp/components/customInput2';
import CustomButton from '../../components/CustomButton';
import img1 from '../../../assets/images/reload.png'
import { useNavigation } from '@react-navigation/native';

const Login = () => {

const [mobileNumber, setMobileNumber] = useState('')
const [password, setPassword] = useState('')
  
const navigation = useNavigation()

// const loginpressed = () => {

//   const options = {
//     method: 'POST',
//     body: new URLSearchParams({
//       user_no: mobileNumber,
//       pass1: password,
//       lat: '',
//       longitude: '',
//       device_id: '',
//       token_id: ''
//     })
//   };
  
//   fetch('https://clean.sangtechsoft.in/service.asmx/customer_login', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// navigation.navigate('OtpScreen')
// console.log(mobileNumber, password)
// }

// useEffect(() => {
//   loginpressed()
// }, [])

const loginpressed = () => {
  
};

const signUpScreen = () => {
  navigation.navigate(NavigationStrings.SIGN_UP)
}

const skip = () => {
  navigation.navigate('HomeScreen')
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <SafeAreaView >
      <View style={styles.container}>
        <View style={styles.logoConainer}>
        <Image 
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
        />
        </View>
        <CustomInput  value={mobileNumber} setValue={setMobileNumber} />
        <CustomInput2 text={password} setText={setPassword} placeholder="Enter Password"/>
        <CustomButton onPress={loginpressed} name="Proceed"/>
        <View style={styles.signupContainer}>
          <Text style={styles.signUp}>Don't have account ?</Text>
          <TouchableOpacity onPress={signUpScreen}><Text style={styles.signUp}>SignUp</Text></TouchableOpacity>
        </View>
        <View style={styles.footer}>
            <Pressable style={styles.skipContainer} onPress={skip}>
            <Image 
            source={img1}
            style={styles.skip}
            />
            <View style={styles.skipTextConatiner}>
              <Text style={styles.skipText}>Skip</Text>
              </View>
            </Pressable>
            <View style={styles.nameContainer}>
              <Text style={styles.cleanText}>CLEAN</Text>
              <Text style={styles.matesText}>MATES</Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    height: "100%",
    width: "100%",
    paddingHorizontal: 20
  },
  logoConainer:{
    alignItems: 'center',
    width: "100%",
    height: "40%",
    justifyContent:'center'
  },
   logo:{
    width: 180,
    height: 180,
   },
 
   signupContainer:{
    flexDirection: 'row',
   },
   signUp:{
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginHorizontal: 3
   },
   footer:{
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginVertical: 10,
height: "30%",
   },
   skipContainer:{
    backgroundColor: '#fff',
    borderRadius: 50,
    position: 'relative',
    marginLeft: -10

   },
   skipTextConatiner:{
    position: 'absolute',
    top: 50,
    left: 20
   },
   skip:{
    width: 120,
    height: 120,
    marginLeft: -20
   },
   skipText:{
    color: "#fff",
    fontSize: 20,
    fontWeight: '600'
   },
   cleanText:{
    color: '#fff',
    marginRight: 5,
    fontSize: 40
   },
   matesText:{
    color: '#FF0000',
    fontSize: 40,
    fontWeight: '600'
   },
   nameContainer:{
    flexDirection: 'row'
   }
});

export default Login;
