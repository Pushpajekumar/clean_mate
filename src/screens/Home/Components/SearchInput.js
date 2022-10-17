import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, TextInput } from 'react-native'

const Searchbar = () => {
  return (
    <View style={styles.searchContainer}>
        <View style={styles.searchbar}>
            <TextInput 
            placeholder='Search For Services Here...'
            placeholderTextColor="#000"
            style={styles.textInput}
            />
      <Icon name='search' size={25} color="gray" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    searchContainer:{
        width: "100%",
        paddingHorizontal:10,
        alignItems: 'center'
    },
    searchbar:{
        width: "95%",
        backgroundColor:"lightgray",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingRight: 10
    },
    textInput:{
        flex: 1,
        paddingLeft: 10
    }
})

export default Searchbar