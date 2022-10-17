import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../../../assets/images/Logo.jpeg'
import { View, Text, StyleSheet, Image } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>
        <Icon name='location-arrow' size={25} color="#f15a22" /> 
      </Text>
      <View style={styles.name}>
      <Text style={styles.title}> Budherhat <Icon name='angle-down' size={25} color="gray" /> </Text>
      <Text>Current Location</Text>
      </View>
      <View>
      <Image 
        style={styles.logo}
      source={Logo}
      />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width: "100%",
    backgroundColor: "#fff",
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical:5
  },
  name:{
    flex: 1,
},
title:{
  fontSize: 20,
  fontWeight: '800',
  color: "black",
},
logo:{
  width: 50,
  height: 50,
  borderRadius:50
},
})

export default Header