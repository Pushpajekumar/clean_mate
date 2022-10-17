import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

const Cart = () => {

  return (
    <SafeAreaView style={styles.container}>
<View style={styles.header}>
  {/* <View style={styles.iconContainer}>
  <Icon name='arrow-left' size={20} color="#fff" /> 
  </View> */}
  <Text style={styles.title}>Cart</Text>
  <View>
  <Icon name='shopping-cart' size={30} color="#fff" /> 
  </View>
</View>
<View style={styles.body}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Oop's Look like you are not login please log in to see your cart</Text>
      </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Log In</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
  },
  iconContainer:{
    width: 40,
    height: 40,
    backgroundColor: "#000",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    width: "100%",
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: "#000"
  },
  title:{
    fontSize: 28,
    fontWeight: '700',
    color: '#fff'
  },
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    width: "40%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer:{
    marginVertical: 30,
    marginHorizontal: 20
  },
  text:{
    color: "#000",
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center'
  },
  buttonText:{
    color: "#fff",
    fontSize: 15
  }
})

export default Cart