import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput2 = ({placeholder, lebel, text, setText}) => {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.lebel}>{lebel}</Text>
      <TextInput 
      placeholder={placeholder}
      style={styles.input}
      value={text}
      onChangeText={setText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        width: '100%',
        borderRadius: 10,
        marginVertical: 10
    },
    lebel:{
        color: "#fff",
        marginLeft: 10
    },
    input:{
        width: "100%",
        height: 50,
        paddingLeft: 20,
        backgroundColor: "#fff",
        borderRadius: 10, 
        color: "#000"
    },
})

export default CustomInput2