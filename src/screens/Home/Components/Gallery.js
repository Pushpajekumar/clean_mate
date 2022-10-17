import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import galleryimg from '../../../../assets/images/gallery.png'
import GalleryCard from './GalleryCard'

import img1 from '../../../../assets/images/car7.jpg'
import img2 from '../../../../assets/images/car4.jpg'


const Gallery = () => {
  return (
    <View style={styles.galleryContainer}>
        <View style={styles.galleryHeading}>
          <View style={styles.galleryImageContainer}>
          <Image 
            source={galleryimg}
            style={styles.galleryImage}
            />
          </View>
          <View style={styles.galleryHeadingTextContainer}>
           <View>
            <Text style={styles.galleryHeadingText}>GA</Text>
           </View>
           <View style={styles.rotateTextContainer}>
            <Text style={styles.rotateText}>L⅂</Text>
           </View>
           <View>
            <Text style={styles.galleryHeadingText}>ERY</Text>
           </View>
          </View>
        </View>
             <GalleryCard title="PICTURE" imgUri={img1} text1="CATAGORICALLY SELECTED" text2="HI-RES PICTURE OF REAL TIME WORK" text3="TYPE BELOW UR CHOICE OF CATEGORY" text4="TO VIEW AND CLICK TO EXPLORE" text5="OR JUST CLICK TO SEE ALL"/>
             <GalleryCard title="VIDEO" imgUri={img2} text1="CATAGORICALLY SELECTED" text2="VIDEO  OF REAL TIME WORK" text3="TYPE BELOW UR CHOICE OF CATEGORY" text4="TO VIEW AND CLICK TO EXPLORE" text5="OR JUST CLICK TO SEE ALL"/>
    </View>
  )
}

const styles = StyleSheet.create({
    galleryContainer:{
        width: "100%",
        height: 1200,
        alignItems: 'center',
        backgroundColor: 'lightgray'
    },
    galleryHeading:{
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height/5,
        flexDirection: 'row'
    },
    galleryImageContainer:{
        width: "40%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    galleryImage:{
        width: "60%",
        height: "60%"
    },
    galleryHeadingTextContainer:{
        width: "60%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    galleryHeadingText:{
        color: 'white',  
        fontSize:40,
        color: "#000",
        marginHorizontal: 8,
        fontWeight: '400'
    },
    rotateText:{
        marginTop: 20,
        letterSpacing: -18,
        fontSize: 70,
        color: '#000',
        fontWeight: '400'

    },
    rotateTextContainer:{
        marginBottom: 20
    }

})

export default Gallery