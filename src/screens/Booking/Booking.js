import React from 'react'
import Header from '../../components/Header'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import imgUri from '../../../assets/images/data-cleaning.png'


const Booking = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Header title="My Bookings"/>
<View style={styles.body}>
<Image 
source={imgUri}
style={styles.image}
/>
<View style={styles.textContainer}>
<Text style={styles.heading}>Whoops, No Bookings !</Text>
<Text style={styles.text}>You can start a new project</Text>
<Text style={styles.text}>by placing a order</Text>
</View>
</View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer:{
    marginVertical: 10
  },
  image:{
    width: 100,
    height: 100
  },
  heading:{
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600'
  },
  text:{
    textAlign: 'center',
    fontSize: 15,
    color: "#000"
  }
})

export default Booking
