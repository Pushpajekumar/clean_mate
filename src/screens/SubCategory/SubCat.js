import React from 'react'
import NavigationStrings from '../../constants/NavigationStrings'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import {subCatData} from '../../../assets/data/Data'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const SubCategory = () => {

  const navigation = useNavigation()

const handleSubCat = () => {
      navigation.navigate(NavigationStrings.SERVICE_INFO)
}

  return (
    <View style={styles.container}>
      <FlatList 

      data={subCatData}
      keyExtractor={(item) => item.id}
      renderItem={(element) => (
        <TouchableOpacity onPress={handleSubCat} style={styles.card}>
        <View style={styles.subCard}>
        <View style={styles.imageContainer}>
   <Image 
   source={element.item.imageUri}
   style={styles.imgae}
   resizeMode="cover"
   />
             </View>
             <Text style={styles.title}>{element.item.title}</Text>
        </View>
     <Icon name='right' size={30} color="black" /> 
        </TouchableOpacity>
      )}

      />
    </View>
  )
}

const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor: "#fff"
      }, 
      card:{
        width: "100%",
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
      },
      imageContainer:{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
      },
      imgae:{
        width: "100%",
        height: "100%",
        borderRadius: 20
      },
      title:{
        fontSize: 20,
        fontWeight: '700',
        color: 'black'
      },
      subCard:{
        flexDirection: 'row',
        alignItems: 'center'
      }
})

export default SubCategory