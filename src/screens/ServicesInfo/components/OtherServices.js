import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const OtherServices = ({details}) => {
  return (
    <View style={styles.container}>
      {details.map(item => (
        <View key={item.id} style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={item.imgUri}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '33%',
    alignItems: 'center',
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
});

export default OtherServices;
