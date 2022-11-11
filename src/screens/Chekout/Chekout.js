import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Call from 'react-native-vector-icons/Ionicons';
import Question from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';

const Chekout = () => {
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
          <Header title="Checkout" />
        <View style={styles.container}>
          <View>
          <View>
            <Text>Not Started</Text>
          </View>
          <View style={styles.bookedServiceDetails}>
<View style={styles.timecontainer}>
<Text style={styles.time}>Today,</Text>
<Text style={styles.time}>10:00</Text>
<Text style={styles.time}>PM</Text>
</View>
<View>
    <Text style={styles.name}>Pushpaje Kumar</Text>
</View>
<View>
    <Text style={styles.name}>Patel Nagar, Rajbansi Nagar, Patna 823001</Text>
</View>
          </View>
          <View style={styles.jobDetails}>
<View>
    <Text style={styles.title}>Job details</Text>
<View style={styles.duration}>
<Text style={styles.name}>duration: </Text>
    <Text style={styles.name}>7 </Text>
</View>
<View style={styles.pricing}>
    <Text style={styles.premium}>Premium full Home cleaning</Text>
    <Text style={styles.premium}>7000</Text>
</View>
<View>
    <Text>7hr</Text>
</View>
<View>
    <Text> 3bhk furnished appartment X 1</Text>
</View>
</View>
</View>
<View style={styles.pricing}>
    <Text style={styles.others}>Others</Text>
    <Text style={styles.others}>499</Text>
</View>

<View style={styles.totalnvoice}>
    <View style={styles.pricing}>
        <Text style={styles.premium} >Total Invoice</Text>
        <Text style={styles.premium}>6298</Text>
    </View>
    <View style={styles.pricing}>
        <Text style={styles.name}>Customer Paid Online</Text>
        <Text style={styles.name}>649</Text>
    </View>
    <View style={styles.pricing}>
        <Text style={styles.name}>Payment to Collect</Text>
        <Text style={styles.name}>5220</Text>
    </View>
</View>
<View>
    <View style={{flexDirection: 'row', marginVertical: 20}}>
    <Call name='call' size={25} color="#000" style={{ marginHorizontal: 10}}/> 
        <Icon name='share' size={25} color="#000" style={{ marginHorizontal: 10}} /> 
        <Question name='question-circle' size={25} color="#000" style={{ marginHorizontal: 10}} /> 
    </View>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Marked as arrived</Text>
    </TouchableOpacity>
</View> 
          </View>
        </View>
      </SafeAreaView>
  );
};

export default Chekout;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10
    },
    bookedServiceDetails:{
        marginVertical: 10
    },
    time:{
        color: "#000",
        fontWeight: "bold",
        fontSize: 40,
        marginHorizontal: 1
    },
    timecontainer: {
        flexDirection: "row",
    },
    name:{
        color: "#000",
        fontSize: 15,
        marginVertical: 5
    },
    title:{
        color: "#000",
        fontSize: 20,
        fontWeight: "700",
    },
    totalnvoice:{
        marginVertical: 20,
    },
    duration:{
        flexDirection: "row",
    },
    pricing:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    premium:{
        fontSize: 16,
        color: "black",
        fontWeight: "600",
    },
    others:{
        color: "black",
        fontSize: 16,
        fontWeight: "600",
        textDecorationLine: "underline",
    },
    jobDetails: {
        marginVertical: 20
    },
    button:{
        backgroundColor: "royalblue",
        paddingHorizontal: 10,
        paddingVertical: 13,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 20
    },
    btnText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
    }
});
