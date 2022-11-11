import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  ProductOfferData,
  otherServices,
  serviceListData,
  Product,
  premiumProduct,
  premiumServiceListData,
} from '../../../assets/data/Data';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Offer from './components/Offer';
import OtherServices from './components/OtherServices';
import ServiceList from './components/ServiceList';
import Servicelist2nd from './components/ServiceList2nd';
import Modal from 'react-native-modal';
import ImgUri from '../../../assets/images/car2.jpg';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';

const ServiceInfo = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  const data = [
    {
      id: 1,
      name: 'Trained Cleaners',
      imgUri: ImgUri,
    },
    {
      id: 2,
      name: 'Industry grade tools and chemicals',
      imgUri: ImgUri,
    },
    {
      id: 3,
      name: 'Efficient',
      imgUri: ImgUri,
    },
    {
      id: 4,
      name: 'Product Cleaners',
      imgUri: ImgUri,
    },
    {
      id: 5,
      name: 'Trained Cleaners',
      imgUri: ImgUri,
    },
  ];

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Header title="Bathroom and Kitchen Cleaning" />
        <View>
          {premiumProduct.map((item, i) => (
            <View key={i}>
              <View style={styles.imageConatiner}>
                <Image
                  source={item.imgUri}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.ratings}>
                <Icon name="star" size={15} color="gray" />
                <Text style={styles.ratingText}>{item.rating}</Text>
                <Text style={styles.ratingText}>{item.numberOfRating}</Text>
              </View>
              <View style={styles.ratings}>
                <Icon name="newspaper-o" size={15} color="gray" />
                <Text style={styles.ratingText}>{item.totalBookings}</Text>
                <Text style={styles.ratingText}>
                  Bookings this year in {item.location}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View>
          <Modal isVisible={openModal} style={styles.modals}>
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: 'lightgray',
                position: 'relative',
                borderTopLeftRadius: 10,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingBottom: 30,
                  borderRadius: 10,
                }}>
                <View style={styles.detailsImageContainer}>
                  {/* <Servicelist2nd /> */}
                  <Image
                    source={ImgUri}
                    resizeMode="cover"
                    style={styles.detailsImage}
                  />
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={handleClose}>
                    <Icon1 name="close" size={30} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailsTitle}>
                    Move in Bathroom Cleaning
                  </Text>
                  <Pressable style={styles.button}>
                    <Text style={styles.addText}>Add</Text>
                  </Pressable>
                </View>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={20} color="gray" />
                  <Text style={{marginLeft: 5}}>5</Text>
                  <Text style={{marginLeft: 5}}>(44k)</Text>
                </View>
              </View>
              <View style={styles.included}>
                <Text style={styles.includedTitle}>Included</Text>
                <View style={styles.includedContainer}>
                  <View style={styles.includedIamgeContainer}>
                    <Image
                      source={ImgUri}
                      resizeMode="cover"
                      style={styles.includedImage}
                    />
                  </View>
                  <View style={styles.includedDetails}>
                    <Text style={styles.includedHeading}>
                      {' '}
                      Objects Removal Before Cleaning
                    </Text>
                    <Text style={styles.includedDesc}>
                      Removal of toiloteries and other objects from the bathroom
                    </Text>
                  </View>
                </View>
                <View style={styles.includedContainer}>
                  <View style={styles.includedIamgeContainer}>
                    <Image
                      source={ImgUri}
                      resizeMode="cover"
                      style={styles.includedImage}
                    />
                  </View>
                  <View style={styles.includedDetails}>
                    <Text style={styles.includedHeading}>
                      {' '}
                      Objects Removal Before Cleaning
                    </Text>
                    <Text style={styles.includedDesc}>
                      Removal of toiloteries and other objects from the bathroom
                    </Text>
                  </View>
                </View>
                <View style={styles.includedContainer}>
                  <View style={styles.includedIamgeContainer}>
                    <Image
                      source={ImgUri}
                      resizeMode="cover"
                      style={styles.includedImage}
                    />
                  </View>
                  <View style={styles.includedDetails}>
                    <Text style={styles.includedHeading}>
                      {' '}
                      Objects Removal Before Cleaning
                    </Text>
                    <Text style={styles.includedDesc}>
                      Removal of toiloteries and other objects from the bathroom
                    </Text>
                  </View>
                </View>
                <View style={styles.includedContainer}>
                  <View style={styles.includedIamgeContainer}>
                    <Image
                      source={ImgUri}
                      resizeMode="cover"
                      style={styles.includedImage}
                    />
                  </View>
                  <View style={styles.includedDetails}>
                    <Text style={styles.includedHeading}>
                      {' '}
                      Objects Removal Before Cleaning
                    </Text>
                    <Text style={styles.includedDesc}>
                      Removal of toiloteries and other objects from the bathroom
                    </Text>
                  </View>
                </View>
                <View style={styles.includedContainer}>
                  <View style={styles.includedIamgeContainer}>
                    <Image
                      source={ImgUri}
                      resizeMode="cover"
                      style={styles.includedImage}
                    />
                  </View>
                  <View style={styles.includedDetails}>
                    <Text style={styles.includedHeading}>
                      {' '}
                      Objects Removal Before Cleaning
                    </Text>
                    <Text style={styles.includedDesc}>
                      Removal of toiloteries and other objects from the bathroom
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.included}>
                <Text style={styles.includedTitle}>Execluded</Text>
                <View style={styles.includedContainer}>
                  <View style={styles.excludedIamgeContainer}>
                    <Icon2 name="cross" size={45} color="red" />
                  </View>
                  <View style={styles.excludedDetails}>
                    <Text style={styles.excludedHeading}>
                      {' '}
                      Objects Removal Before Cleaning
                    </Text>
                  </View>
                </View>
                <View style={styles.includedContainer}>
                  <View style={styles.excludedIamgeContainer}>
                    <Icon2 name="cross" size={45} color="red" />
                  </View>
                  <View style={styles.excludedDetails}>
                    <Text style={styles.excludedHeading}>
                      {' '}
                      Objects Removal Before Cleaning
                    </Text>
                  </View>
                </View>
                <View style={styles.includedContainer}>
                  <View style={styles.excludedIamgeContainer}>
                    <Icon2 name="cross" size={45} color="red" />
                  </View>
                  <View style={styles.excludedDetails}>
                    <Text style={styles.excludedHeading}>
                      {' '}
                      Objects Removal Before Cleaning
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.features}>
                <FlatList
                  data={data}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  renderItem={element => (
                    <View style={styles.card}>
                      <View style={styles.cardTextContainer}>
                        <Text style={styles.cardText}>{element.item.name}</Text>
                      </View>
                      <View style={styles.cardImg}>
                        <Image
                          style={styles.cardImagePreview}
                          source={element.item.imgUri}
                        />
                      </View>
                    </View>
                  )}
                />
                {/* <View style={styles.card}>
                  <View style={styles.cardTextContainer}>
                    <Text style={styles.cardText}>Trained Cleaners</Text>
                  </View>
                  <View style={styles.cardImg}>
                    <Image style={styles.cardImagePreview} source={ImgUri} />
                  </View>
                </View> */}
              </View>
            </ScrollView>
          </Modal>
        </View>
        <View style={styles.guide}>
          <Pressable style={styles.guideButton}>
            <Icon name="heart" size={30} color="purple" />
            <Text style={styles.btnText}>UC Professional Cleaning Guide</Text>
            <Icon name="angle-right" size={30} color="gray" />
          </Pressable>
        </View>
        <Offer details={ProductOfferData} />
        <OtherServices details={otherServices} />
        <View>
          <Text style={styles.serviceTitle}>Home Cleaning</Text>
          <Servicelist2nd
            details={premiumServiceListData}
            handlepress={handleModal}
          />
          <ServiceList details={serviceListData} handlepress={handleModal} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageConatiner: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
    paddingHorizontal: 10,
  },
  ratingsContainer: {},
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 1,
  },
  ratingText: {
    paddingHorizontal: 5,
    color: 'gray',
  },
  guide: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 15,
  },
  guideButton: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  btnText: {
    fontSize: 15,
    marginHorizontal: 5,
    marginVertical: 15,
    color: 'gray',
  },
  serviceTitle: {
    fontSize: 27,
    fontWeight: '800',
    color: '#000',
    paddingHorizontal: 10,
  },
  detailsImageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
  },
  detailsImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  closeButton: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -15,
    right: -15,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#fff',
    shadowRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  addText: {
    paddingVertical: 8,
    color: 'purple',
    fontSizea: 17,
    fontWeight: '700',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 5,
  },
  detailsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  included: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  includedTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  includedContainer: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 20,
  },
  includedIamgeContainer: {
    width: '20%',
    height: 70,
    borderRadius: 5,
  },
  excludedIamgeContainer: {
    width: '20%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  includedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  includedDetails: {
    paddingHorizontal: 5,
  },
  excludedDetails: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  includedHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  excludedHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
  },
  includedDesc: {
    color: 'gray',
    fontSize: 13,
    paddingHorizontal: 10,
  },
  features: {
    width: '100%',
    marginVertical: 10,
    height: 250,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 250,
    height: 170,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  cardTextContainer: {
    width: '60%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    width: '40%',
    height: '100%',
  },
  cardImagePreview: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ServiceInfo;
