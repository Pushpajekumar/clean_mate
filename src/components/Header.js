import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles= StyleSheet.create({
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
})

export default Header