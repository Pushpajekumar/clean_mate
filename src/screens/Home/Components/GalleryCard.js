import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'


const GalleryCard = ({title, imgUri, text1, text2, text3, text4, text5}) => {
  return (
    <View style={styles.gallerCardContainer}>
      <View style={styles.imageContainer}>
<Image 
source={imgUri}
style={styles.galleryImage}
/>
      </View>
      <View>
        <View style={styles.pictureContainer}>
            <Text style={styles.pictureText}>{title}</Text>
        </View>
        <View style={styles.galleryCardTextContainer1}>
            <Text style={styles.galleryText}>{text1}</Text>
            <Text style={styles.galleryText}>{text2}</Text>
        </View>
        <View style={styles.galleryCardTextContainer2}>
            <Text style={styles.galleryText}>{text3}</Text>
            <Text style={styles.galleryText}>{text4}</Text>
        </View>
        <View style={styles.galleryCardTextContainer3}>
            <Text style={styles.galleryText}>{text5}</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput
             placeholder='TYPE HERE  .........'
             style={styles.textinput}
             />
             <TouchableOpacity style={styles.circle}>
                <View style={styles.square}>             
                </View>
             </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    gallerCardContainer:{
        width: "90%",
        height: 500,
        borderRadius: 20,
      backgroundColor: "#fff",
      marginVertical: 15
    },
    imageContainer:{
      width: "100%",
      height: "50%",
      borderRadius: 20
    },
    galleryImage:{
        width: "100%",
        height: "100%",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    pictureContainer:{
        marginTop: -15
    },
    pictureText:{
        textAlign: 'right',
        paddingRight: 20,
        fontSize: 70,
        fontWeight: '800',
        opacity: 0.1
    },
    galleryCardTextContainer1:{
        width: "90%",
        marginHorizontal: 20,
        marginTop: -20
    },
    galleryCardTextContainer2:{
        width: "90%",
        marginHorizontal: 20,
        marginVertical: 3
    },
    galleryCardTextContainer3:{
        width: "90%",
        marginHorizontal: 20,
        marginBottom: 2
    },
    galleryText:{
        color: "#000",
        fontWeight: '600'
    },
    inputContainer:{
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#D9D9D9',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50
    },
    textinput:{
        paddingLeft: 10,
        flex: 1,
    },
    circle:{
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    square:{
        width: 20,
        height: 20,
        borderWidth:3,
        borderColor: 'white',
        borderRadius: 5
    }
   
})

export default GalleryCard