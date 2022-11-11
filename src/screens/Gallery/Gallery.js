import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { imagesData } from '../../../assets/data/Data'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagesGallery from './components/ImagesGallery'

const Gallery = () => {

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: 'All Images', value: null },
    { label: 'Home Cleaning', value: 'Home_Cleaning' },
    { label: 'Sofa Cleaning', value: 'Sofa_Cleaning' },
    { label: 'Deep Cleaning', value: 'Deep_Cleaning' },
    { label: 'Kitchen', value: '5' },
    { label: 'Bathroom', value: '6' },

  ];

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    {renderLabel()}
    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Select item' : '...'}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
      }}
      renderLeftIcon={() => (
        <AntDesign
          style={styles.icon}
          color={isFocus ? 'blue' : 'black'}
          name="Safety"
          size={20}
        />
      )}
    />
    <ImagesGallery details={imagesData} imageList={value} />
  </SafeAreaView>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})

export default Gallery