import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, SafeAreaView } from 'react-native'

const TopPicks = ({details}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Top Picks</Text>
      <FlatList 
      data={details}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={(element) => (
        <View style={styles.topPicksBox}>
            <View style={styles.imageContainer}>
               <Image 
            source={element.item.imgUri}
            style={styles.image}
            resizeMode='contain'
            />
            </View>
            <Text style={styles.name}>{element.item.name}</Text>
            <Text style={styles.warrenty}>{element.item.support}</Text>
        </View>
      )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginHorizontal: 10
    }, 
    topPicksBox:{
        width: 120,
        height: 220,
        backgroundColor: 'cyan',
        marginHorizontal: 10,
        borderTopLeftRadius:50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    imageContainer:{
      width: "100%",
      height: "50%",
      backgroundColor: '#fff',
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center'
    },
    image:{
        width: "100%",
        height: "100%"
    },
    name:{
      color: '#000',
      fontSize: 17,
      fontWeight: '600',
      textAlign: 'center'
    },
    warrenty:{
      fontSize: 20,
      textAlign: 'center',
      fontWeight:'bold',
      color: '#000'
    }, 
    title:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 25
    }
})

export default TopPicks