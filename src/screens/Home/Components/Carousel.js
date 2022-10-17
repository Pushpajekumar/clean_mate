import React from 'react'
import Swiper from 'react-native-swiper'
import { View, StyleSheet, Image } from 'react-native'

const Carousel = ({details}) => {
  return (
    <View style={styles.container}>
        <Swiper
        autoplay={true}
        loop={true}
          dot={
      <View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 30,}} />
    }
    activeDot={
      <View style={{backgroundColor:'red', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 30, }} />
    }
    >
        
{
    details.map((item) => (
        <View key={item.id} style={styles.carouselBox}>
            <Image 
            key={item.id}
            source={item.imgUri}
            style={styles.image}
            resizeMode='cover'
            />
        </View>
    ))
}
        </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 220,
        marginVertical: 10
    },
    image:{
        width: "100%",
        height: "100%",
        borderRadius: 15
    },
    carouselBox:{
        paddingHorizontal: 10,
        borderRadius: 15
    }
})

export default Carousel