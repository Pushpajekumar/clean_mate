import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import img1 from '../../../../assets/images/qr-code.png'


const Footer = () => {
  return (
   <View>
     <View style={styles.textContainer}>
      <Text style={styles.firstText}>MAKING</Text>
      <Text style={styles.secondText}>DIFFRENCE</Text>
      <Text style={styles.thirdText}>DIFFRENTLY !</Text>
    </View>
    <View style={styles.socialMediaContainer}>
    <Icon name='facebook' size={60} color="#4267B2" /> 
    <Icon name='whatsapp' size={60} color="#25D366" /> 
    <Icon name='linkedin' size={60} color="#4267B2" /> 
    <Icon name='instagram' size={60} color="#F77737" /> 
    </View>
    <View style={styles.totalCountContainer}>
        <View style={styles.count}>
            <Text style={styles.countText}>TOTAL BOOKING MADE TILL DATE</Text>
            <Text style={styles.countNumber}>430</Text>
        </View>
        <View style={styles.count}>
            <Text style={styles.countText}>Avg. RATING</Text>
            <Text style={styles.countNumber}>4.8</Text>
        </View>
       

        <View style={styles.count}>
            <Text style={styles.countText}>TOTAL</Text>
            <Text style={styles.countText}>VIEW TILL DATE</Text>
            <Text style={styles.countNumber}>800</Text>
        </View>
    </View>
    <View style={styles.clickContainer}>
        <Text style={styles.clickText}>Click Me</Text>
        <View style={styles.qrContainer}>
<Text style={styles.qrText}>CONTACT</Text>
<Image 
source={img1}
style={styles.qrImage}
/>
<Text style={styles.qrText}>HELPLINE</Text>
        </View>
        <Text style={styles.clickText}>Scan Me</Text>

    </View>
    <View style={styles.greetingContainer}>
    <Text style={styles.greeting}>SERVE WITH ❤️ FROM KOLKATA INDIA</Text>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
    textContainer:{
        justifyContent: 'flex-start',
        paddingHorizontal: 20
    },
    firstText:{
        fontSize: 70,
        fontWeight: '700',
    fontFamily: 'Arial-font'

    },
    secondText:{
        fontSize: 30,
        fontWeight: '700'
    },
    thirdText:{
        fontSize: 50,
        fontWeight: '700',
        marginTop: -10
    },
    socialMediaContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        paddingHorizontal: 20

    },
    totalCountContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,
        alignItems: 'center',
    },
    count:{
      width : "33%",
      justifyContent: 'center',
      alignItems: 'center'
  },
  countText:{
    fontSize: 15,
    fontWeight: '700'
  },
 countNumber:{
    fontSize: 40,
    fontWeight: '700'
 },
 clickContainer:{
    justifyContent: 'center',
    alignItems: 'center',
 },
 clickText:{
    fontSize: 20,
    fontWeight: '700'
 },
 qrContainer:{
    flexDirection: 'row',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
 },
 qrImage:{
    width: "50%",
    height: "90%"
 }, 
 qrText:{
    fontSize: 20,
    fontWeight: '700',
    opacity: 0.1
 },
 greeting:{
    fontSize:18,
    fontWeight: '700'
 }, 
 greetingContainer:{
    justifyContent: 'center',
    alignItems: 'center'
 }
})

export default Footer