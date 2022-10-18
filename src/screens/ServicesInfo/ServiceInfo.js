
import React, {useState} from 'react'
import Modal from 'react-native-modal'
import { View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView } from 'react-native'
import { ProductOfferData, otherServices, serviceList } from '../../../assets/data/Data'
import Header from '../../components/Header'
// import  Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from './components/Video'
import Offer from './components/Offer';
import OtherServices from './components/OtherServices';
import ServiceList from './components/ServiceList';
import Servicelist2nd from './components/ServiceList2nd';

const ServiceInfo = () => {

const [openModal, setOpenModal] = useState(false)

const handleModal = () => {
  setOpenModal(true);
}

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Header title="Bathroom and Kitchen Cleaning"/>
      <Video />
     <View>
     <Text style={styles.title}>Bathroom and Kitchen Cleaning</Text>
     </View>
     <View>
      <Modal
      isVisible={openModal}
      >
        <View style={{flex:1, backgroundColor: 'white',}}>
          <Text>
            Pushpaje
          </Text>
          <Text onPress={() => setOpenModal(false)}> Close </Text>
        </View>
      </Modal>
     </View>
      <View style={styles.ratingsContainer}>
        <View style={styles.ratings}>
  <Icon name='star' size={15} color="gray" /> 
  <Text style={styles.ratingText}>4.74</Text>
  <Text style={styles.ratingText}>(44k)</Text>
        </View>
        <View style={styles.ratings}>
  <Icon name='newspaper-o' size={15} color="gray" /> 
  <Text style={styles.ratingText}>776</Text>
  <Text style={styles.ratingText}>Bookings this year in shivpuri</Text>
        </View>
        <View style={styles.guide}>
          <Pressable style={styles.guideButton}>
  <Icon name='heart' size={30} color="purple" /> 
            <Text style={styles.btnText}>UC Professional Cleaning Guide</Text>
  <Icon name='angle-right' size={30} color="gray" /> 
            </Pressable>
        </View>
        <Offer details={ProductOfferData}/>
        <OtherServices details={otherServices}/>
        <View>
          <Text style={styles.serviceTitle}>Home Cleaning</Text>
          <Servicelist2nd onpress={handleModal}/>
          {/* <Modal>
          <View>
            <Text>Pushpaje</Text>
          </View>
          </Modal> */}
          <Servicelist2nd />
        <ServiceList details={serviceList}/>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff"
  },
  title:{
    fontSize: 25,
    fontWeight:'700',
    color: "#000",
    paddingHorizontal: 10
  },
  ratingsContainer:{
  },
  ratings:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 1
  },
  ratingText:{
    paddingHorizontal: 5,
    color: "gray"
  },
  guide:{
    width: "100%",
    alignItems: 'center',
    marginVertical: 15
  },
  guideButton:{
    width: "90%",
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  btnText:{
    fontSize: 15,
    marginHorizontal: 5,
    marginVertical: 15,
    color: "gray"
  },
  serviceTitle:{
    fontSize: 27,
    fontWeight: '800',
    color: "#000",
    paddingHorizontal: 10
  }
})

export default ServiceInfo


