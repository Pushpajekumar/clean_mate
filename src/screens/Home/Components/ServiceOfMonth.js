import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList, Image } from 'react-native'

const ServiceOfTheMonth = ({details}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Service Of The Month</Text>
        <FlatList 
        horizontal={true}
      showsHorizontalScrollIndicator={false}
        data={details}
        keyExtractor={(item) => item.id}
        renderItem={(element) => (
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image 
                    source={element.item.imgUri}
                    style={styles.image}
                    resizeMode='contain'
                    />
                </View>
                <View style={styles.badge}>
  <Text style={styles.textOffer}>{element.item.discount}</Text>
</View>
<View style={styles.nameContainer}>
  <Text style={styles.productName}>{element.item.name}</Text>
</View>
            </View>
        )}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 10,
      },
      title:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25
      },
      card:{
        width: 170,
        height: 220,
        backgroundColor: "#F4E2DE",
        borderRadius: 20,
        alignItems: 'center',
        position: 'relative',
        marginHorizontal: 10,
        marginVertical: 25
      },
      imageContainer:{
        width: "70%",
        height: "60%",
        backgroundColor: "#fff",
        borderRadius: 12,
        position: 'absolute',
        top: -30,
        justifyContent: 'center',
        alignItems: 'center'
      },
      image:{
        width: "100%",
    height: "100%"
      },
      badge:{
        width: "80%",
        height: 35,
        backgroundColor: 'brown',
        position: 'absolute',
        bottom: 60,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textOffer:{
        fontSize: 15,
        color: "#fff"
      },
      nameContainer:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
        marginTop: 5
      },
      productName:{
        fontSize: 15,
        color: 'black'
      }
})

export default ServiceOfTheMonth