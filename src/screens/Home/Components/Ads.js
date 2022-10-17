import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const Ads = ({details}) => {
  return (
    <View style={styles.container}>
      <Image 
      source={details[0].imgUri}
      style={styles.image}
      resizeMode='cover'
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 150,
        marginVertical: 10
    },
    image:{
        width: "100%",
        height: "100%",
    }
})

export default Ads