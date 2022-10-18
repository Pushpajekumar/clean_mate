import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, FlatList, StyleSheet,SafeAreaView } from 'react-native'

const Offer = ({details}) => {
  return (
<SafeAreaView>
<FlatList 
 data={details}
 horizontal={true}
 showsHorizontalScrollIndicator={false}
 keyExtractor={(item) => item.id}
 renderItem={(element) => (
  <View style={styles.offerContainer}>
<View style={styles.offerTitleContainer}>
<Icon name='star' size={20} color="green" /> 
  <Text style={styles.textOffer}>{element.item.offer}</Text>
</View>
<View>
<Text style={styles.codeText}>{element.item.code}</Text>
</View>
  </View>
 )}
 />
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
  offerContainer:{
    width: 250,
    backgroundColor: "#F5F5F5",
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 10
  },
  offerTitleContainer:{
    flexDirection: 'row',
  },
  textOffer:{
    fontSize: 17,
    fontWeight: '700',
    color: "#000",
    marginHorizontal: 5
  },
  codeText:{
    fontSize: 15,
    color: "#000",
    marginHorizontal: 20
  }
})

export default Offer