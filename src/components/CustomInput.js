import React from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'

const ListSlider = ({value, setValue}) => {
  
  return (
    <View style={{marginVertical: 10}}>
      <Text style={styles.label}>Enter Your Mobile Number</Text>
    <View style={styles.inputContainer}>
      <View style={styles.countryCodeContainer}>
        <Text style={styles.countryCodeText}>+ 91</Text>
      </View>
      <TextInput 
      placeholder='Enter Your Mobile Number'
      style={styles.input}
      onChangeText={setValue}
      value={value}
      keyboardType="numeric"
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label:{
    color: "#fff",
  },
  inputContainer:{
    width: "100%",
    flexDirection: 'row',
  },
  countryCodeContainer:{
backgroundColor: '#fff',
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 10,
borderTopLeftRadius: 8,
borderBottomLeftRadius: 8
  },
  countryCodeText:{
    color: '#000'
  },
    input:{
        backgroundColor: '#fff',
        width: "85%",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        height: 50,
        color: "#000"
    }
})

export default ListSlider