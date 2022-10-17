import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({details}) => {
  return (
    <View style={styles.container}>
      {/* <FlatList 
      data={details}
      keyExtractor={(item) => item.id}
      renderItem={(element) => (
        <TouchableOpacity style={styles.optionsBox}>
        <Icon name='location-arrow' size={35} color="#f15a22" /> 
        <Text style={styles.text}>{element.item.name}</Text>
        </TouchableOpacity>
      )}
      /> */}

{
  details.map ((element) => (
    <TouchableOpacity style={styles.optionsBox} key={element.id}>
        <Icon name='location-arrow' size={35} color="#f15a22" /> 
        <Text style={styles.text}>{element.name}</Text>
        </TouchableOpacity>
  ))
}

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%", 
    marginVertical: 10
  },
  optionsBox:{
    flexDirection: 'row',
    height: 60,
    borderBottomWidth:1,
    borderColor: "#000",
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },
  text:{
    padding: 10,
    fontSize: 15,
  }
})

export default Profile