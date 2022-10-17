import React from 'react'
import Header from '../../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome';
import { profileSetting } from '../../../assets/data/Data'
import ProfileOptions from './components/ProfileOptions'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'

const Profile = () => {

  return (
    <ScrollView>
    <SafeAreaView style={styles.container} >
        <View>
<Header title="My Profile"/>
<View style={styles.verifyContainer}>
<Text style={styles.verifiedText}>Verified Customer</Text>
<View style={styles.iconContainer}>
<Icon name='edit' size={30} color="#000" /> 
</View>
<Text>+91 6200909877</Text>
</View>
  <ProfileOptions details={profileSetting}/>
  <View style={styles.logoutContainer}>
    <Text style={styles.logoutText}>LogOut</Text>
  </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  )
}

const styles= StyleSheet.create({
     container:{
        flex: 1
     },
     header:{
        width: "100%",
        height: 70,
        backgroundColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    
      },
      title:{
        color: "#fff",
        fontSize: 23,
        fontWeight: '700'
      },
      verifyContainer:{
        width: "100%",
        height: 90,
        backgroundColor: "#fff",
        padding: 10 
      },
      verifiedText:{
        fontSize: 16,
        color: "#000"
      }, 
      iconContainer:{
        alignItems: 'flex-end',
      },
      text:{
        fontSize: 16
      },
      logoutContainer:{
alignItems: 'center',
marginVertical: 10
      },
      logoutText:{
        color: "red",
        fontSize: 15,
        fontWeight: '700'
      }


})

export default Profile