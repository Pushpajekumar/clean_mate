import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const images = ({details, imageList}) => {
  return (
    <View style={styles.container}>
     {
      details.map((item, i) => (
        <View style={styles.imageContainer} key={i}>
          {
            imageList == item.name ? (
              <Image
              source={item.imgUri}
              style={styles.image}
              /> 
            ) : ('')
          }
     </View>
      ))
     }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer:{
    width: '50%',
    height: 200,
  },
  image:{
width: '100%',
height: '100%',
  }
})

export default images

