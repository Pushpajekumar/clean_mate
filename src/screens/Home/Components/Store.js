import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import img1 from "../../../../assets/images/store.png"

const Store = () => {
  return (
    <View style={styles.store}>
      <View style={styles.storeTextContainer}>
        <Text style={styles.storeText}>Store</Text>
      </View>
      <View style={styles.storeCardContainer}>
        <Text style={styles.cardText}>Store</Text>
        <Image 
        source={img1}
        style={styles.img}
        />
      </View>
      <View style={styles.card}>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    store:{
        width: "90%",
        alignItems: 'center'
    },
    storeTextContainer:{
    
    },
    storeText:{
        fontSize: 100,
        fontWeight: '800',
        marginTop: -30,
        color: "#f15a22",
        opacity: 0.1,
        marginLeft: 80,
    fontFamily: 'Arial font'

    },
    storeCardContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    cardText:{
        fontSize: 80,
        color: "#f15a22",
        fontWeight: '800', 
        marginRight: 10,
        fontFamily: 'Arial font'

    },
    img:{
        width: "30%",
        height: "100%",
    },
    card:{
        width: "95%",
        height: 400,
        borderRadius: 20,
        marginLeft: 30,
        backgroundColor: "#f15a22"
    }
    
})

export default Store