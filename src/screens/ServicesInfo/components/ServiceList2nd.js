import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

const Servicelist2nd = ({details, handlepress}) => {
  return (
    <View style={styles.container}>
      {details.map((item, i) => (
        <View key={i}>
          <View style={styles.videoContainer}>
            <Image source={item.imgUri} style={styles.video} />
          </View>
          <View style={styles.titleCotainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>{item.name}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button}>
                <Text style={styles.addText}>Add</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.reviewContainer}>
            <Icon name="star" size={20} color="gray" />
            <Text style={styles.rating}>{item.rating}</Text>
            <Text style={styles.numberOfRating}>{item.totalRating}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}> ₹ {item.price}</Text>
            <View style={styles.timeContainer}>
              <Icon name="circle" size={8} color="gray" />
              <Text style={{marginHorizontal: 5, color: 'gray'}}>
                {item.time}{' '}
              </Text>
              <Text style={{color: 'gray'}}>mins </Text>
            </View>
          </View>
          <View style={styles.desc1}>
            <Icon name="circle" size={8} color="gray" />
            <Text style={{marginHorizontal: 10, color: 'gray'}}>
              {' '}
              India, officially the Republic of India (Hindi: Bhārat
              Gaṇarājya),[26] is a country in South Asia. It is the
              seventh-largest country{' '}
            </Text>
          </View>
          <Pressable onPress={handlepress} style={styles.viewdetails}>
            <Text style={styles.viewdetailsText}> View Details</Text>
          </Pressable>
        </View>
      ))}

      {/* <View style={styles.videoContainer}>
        <Video
          source={video}
          style={styles.video}
          paused={false}
          repeat={true}
        />
      </View>
      <View style={styles.titleCotainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Move - in Bathroom Cleaning</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.addText}>Add</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <Icon name="star" size={20} color="gray" />
        <Text style={styles.rating}>5.0</Text>
        <Text style={styles.numberOfRating}>(9.6k)</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}> ₹ 400</Text>
        <View style={styles.timeContainer}>
          <Icon name="circle" size={8} color="gray" />
          <Text style={{marginHorizontal: 5, color: 'gray'}}>30 </Text>
          <Text style={{color: 'gray'}}>mins </Text>
        </View>
      </View>
      <View style={styles.desc1}>
        <Icon name="circle" size={8} color="gray" />
        <Text style={{marginHorizontal: 10, color: 'gray'}}>
          {' '}
          India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),[26]
          is a country in South Asia. It is the seventh-largest country{' '}
        </Text>
      </View>
      <Pressable onPress={onpress} style={styles.viewdetails}>
        <Text style={styles.viewdetailsText}> View Details</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 450,
    paddingHorizontal: 10,
  },
  videoContainer: {
    height: 220,
    borderRadius: 15,
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  titleCotainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  titleTextContainer: {
    width: '70%',
  },
  buttonContainer: {
    width: '30%',
  },
  button: {
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#fff',
    shadowRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    paddingVertical: 8,
    color: 'purple',
    fontSizea: 17,
    fontWeight: '700',
  },
  reviewContainer: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  rating: {
    marginHorizontal: 5,
    color: 'gray',
  },
  numberOfRating: {
    marginHorizontal: 3,
    color: 'gray',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  priceText: {
    fontSize: 17,
    fontWeight: '700',
    color: 'gray',
  },
  desc1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewdetails: {
    backgroundColor: '#CBC3E3',
    width: 100,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 5,
    marginVertical: 10,
  },
  viewdetailsText: {
    color: 'purple',
    fontWeight: '700',
  },
});

export default Servicelist2nd;
