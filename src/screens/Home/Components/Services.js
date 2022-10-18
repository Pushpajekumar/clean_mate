import React from 'react'
import NavigationStrings from '../../../constants/NavigationStrings'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Services = ({ details }) => {

  const navigation = useNavigation()

const handleService = () => {
navigation.navigate(NavigationStrings.SUB_CATEGORY)
}

  return (
     <View style={styles.productContainer}>
        {details.map((value) => (
          <View style={styles.box} key={value.id}>
          <TouchableOpacity style={styles.productBox} onPress={handleService} >
           <Image 
        source={value.imgUri}
        style={styles.image}
        resizeMode='contain'
        />
          </TouchableOpacity>
          <Text style={styles.name}>{value.name}</Text>
          </View>
        ))}
     </View>
  )
}

const styles = StyleSheet.create({
  productContainer:{
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  box:{
    width: "30%",
    height: 110,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2
  },
  name:{
    color: '#000',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '600'
  },
  productBox:{
    width: "100%",
    borderRadius: 10,
    backgroundColor: 'lightgray',
    height: 80,
    padding: 5
  },
  image:{
    width: "100%",
    height: "100%"
  }
})

export default Services