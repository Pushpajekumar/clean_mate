import React from 'react'
import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const ServiceList = ({details , handlepress}) => {
  return (
    <View style={styles.container}>
   {
    details.map((item,i) => (
<View style={styles.card} key={i}>
<View style={styles.infoContainer}>
    <Text style={styles.name}>{item.name}</Text>
    <View style={styles.reviewContainer}>
<Icon name='star' size={20} color="gray" /> 
  <Text style={styles.rating}>{item.rating}</Text>
  <Text style={styles.numberOfRating}>{item.totalRating}</Text>
    </View>
    <View style={styles.priceContainer}>
        <Text style={styles.priceText}> ₹ {item.amount}</Text>
        <View style={styles.timeContainer}>  
           <Icon name='circle' size={8} color="gray" /> 
            <Text style={{marginHorizontal: 5, color: "gray"}}>{item.time} </Text>
            <Text style={{color: "gray"}}>mins </Text>
        </View>
    </View>
    <View style={styles.desc}>
        <View style={styles.desc1}>
           <Icon name='circle' size={8} color="gray" /> 
            <Text style={{marginHorizontal: 10, color: "gray"}}>{item.discription1}</Text>
        </View>
        <View style={styles.desc2}>
           <Icon name='circle' size={8} color="gray" style={{marginTop: 8}} /> 
            <Text style={{marginHorizontal: 10, color: "gray"}}>{item.discription2}</Text>
        </View>
    </View>
    <Pressable style={styles.viewdetails} onPress={handlepress}><Text style={styles.viewdetailsText}> View Details</Text></Pressable>
</View>
<View style={styles.imageContainer}>
  <View style={styles.imageCard}>
  <Image 
    source={item.imgUri}
    style={styles.image}
    resizeMode="cover"
    />
  </View>
  <Pressable style={styles.button}><Text style={styles.addText}>Add</Text></Pressable>
</View>
</View>
    ))
   }
    </View>
  )
}

 const styles = StyleSheet.create({
    container:{
        width: "100%",
    },
    card:{
        width: "100%",
        height: 250,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    infoContainer:{
        width: "70%",
        paddingVertical: 20
    },
    imageContainer:{
        width: "30%",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    imageCard:{
        width: 110,
        height: 110,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    image:{
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    button:{
        width: "70%",
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#fff",
        shadowRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: "65%"
    },
    addText:{
        paddingVertical: 8,
        color: "purple",
        fontSizea: 17,
        fontWeight: '700'
    },
    name:{
        fontSize: 22,
        fontWeight: '700',
        color: "#000"
    },
    reviewContainer:{
        flexDirection: 'row',
        marginVertical: 3
    },
    rating:{
        marginHorizontal: 5,
        color: "gray"
    },
    numberOfRating:{
        marginHorizontal: 3,
        color: "gray"
    },
    priceContainer:{
        flexDirection: 'row',
    },
    timeContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    priceText:{
        fontSize: 17,
        fontWeight: '700',
        color: "gray"
    },
    desc:{
        marginVertical: 20,
    },
    desc1:{
        flexDirection: 'row',
        alignItems: 'center',

    },
    desc2:{
        flexDirection: 'row',
        color: "gray"
    },
    viewdetails:{
        backgroundColor: '#CBC3E3',
        width: 100,
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 8,
        elevation: 3,
        marginBottom: 5
    },
    viewdetailsText:{
        color: 'purple',
        fontWeight: '700'
    }
 })

export default ServiceList


