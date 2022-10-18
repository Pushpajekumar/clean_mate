import React from 'react'
import NavigationStrings from '../../constants/NavigationStrings'
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Logo from '../../../assets/images/Logo.jpeg'
import CustomInput2 from '../SignUp/components/customInput2'
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const OtpVerification = () => {

const navigation = useNavigation()

const changeScreen = () => {
navigation.navigate(NavigationStrings.SIGN_IN)
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
   <SafeAreaView>
    <View style={styles.container}>
    <View style={styles.logoConainer}>
        <Image 
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
        />
        </View>
        <Text style={styles.text}>We Have sent a 6 digit verification code on your mobile number please enter to proceed</Text>
        <View style={styles.input}>
        <CustomInput2 lebel="Enter Your Verification Code" placeholder="Verification Code"/>
        </View>
        <CustomButton name="Proceed" onPress={changeScreen}/>
        <View style={styles.signupContainer}>
          <Text style={styles.signUp}>Didn't receive OTP ?</Text>
          <TouchableOpacity><Text style={styles.signUp}>Resend</Text></TouchableOpacity>
        </View>
        <View style={styles.nameContainer}>
              <Text style={styles.cleanText}>CLEAN</Text>
              <Text style={styles.matesText}>MATES</Text>
            </View>
    </View>
   </SafeAreaView>
   </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        alignItems: 'center',
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
       text:{
        color: "#fff",
        fontSize: 15,
        fontWeight: '600',
        paddingHorizontal: 10,
       },
       input:{
        width: "60%",
        marginVertical: 20
       },  signupContainer:{
        flexDirection: 'row',
       },
       signUp:{
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        marginHorizontal: 3
       },
       nameContainer:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
       },
       cleanText:{
        color: '#fff',
        marginRight: 5,
        fontSize: 50
       },
       matesText:{
        color: '#FF0000',
        fontSize: 50,
        fontWeight: '800'
       },
})

export default OtpVerification