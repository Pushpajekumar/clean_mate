import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import NavigationStrings from '../../constants/NavigationStrings'
import CustomInput from '../../components/CustomInput'
import CustomInput2 from './components/customInput2'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
 
const SignUp = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [mobileNumber, setMobileNumber] = useState('')

  const navigation = useNavigation()

  const loginScreen = () => {
    navigation.navigate(NavigationStrings.SIGN_IN)
  }

const handleSubmit = () => {
  navigation.navigate(NavigationStrings.OTP_VERIFICATION)
} 

//   const options = {
//     method: 'POST',
//     url: 'https://clean.sangtechsoft.in/service.asmx/signup',
//     data: {
//       user_name: 'Pushpaj',
//       phonenumber: '6200305581',
//       token: '',
//       password: '6200305580',
//       refferalcode: '',
//       email: 'mk6358522@gmail.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error.response.data);
//   });

// console.log(name, email, mobileNumber)
// }

// useEffect(() => {
//   handleSubmit()
// }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.accountContainer}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </View>
      <CustomInput2 lebel="Name" placeholder="Enter Your FullName" text={name} setText={setName}/>
      <CustomInput2 lebel="Email" placeholder="Enter Your Email" text={email} setText={setEmail}/>
      <CustomInput value={mobileNumber} setValue={setMobileNumber} />
      <CustomInput2 lebel="Refer Code" placeholder="Refer Code [Optional]"/>
      <View style={styles.buttonContainer}>
      <CustomButton name="Create Account" onPress={handleSubmit}/>
      </View>
      <View style={styles.signupContainer}>
          <Text style={styles.signUp}>All Ready have account ?</Text>
          <TouchableOpacity onPress={loginScreen}><Text style={styles.signUp}>SignIn</Text></TouchableOpacity>
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
    padding: 20,
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#000'
  },
  accountContainer:{
    marginVertical: 10
  },
  createAccountText:{
    fontSize: 35,
    fontWeight: '600',
    color: "#fff"
  },
  buttonContainer:{
    width: "100%",
    marginVertical: 10
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


export default SignUp