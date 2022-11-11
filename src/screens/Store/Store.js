import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from '../../components/Header'

const Store = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comming Soon....</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text:{
    fontSize: 30,
     fontWeight: 'bold',
    color: '#000'
  }
})

export default Store