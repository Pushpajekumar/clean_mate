import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import {carouselData, bannerData, productData, topPicksData, serviceOfTheMonth} from '../../../assets/data/Data'
import Header from './Components/Header'
import SearchInput from './Components/SearchInput'
import Carousel from './Components/Carousel'
import Ads from './Components/Ads'
import Services from './Components/Services'
import TopPicks from './Components/TopPicks'
import ServiceOfTheMonth from './Components/ServiceOfMonth'
import Gallery from './Components/Gallery'
import Store from './Components/Store'
import Footer from './Components/Footer'

const Home = () => {
  return (
   <ScrollView>
    <SafeAreaView style={styles.container}>
    <Header />
    <SearchInput />
    <Carousel details={carouselData}/>
    <Services  details={productData}/>
    <Ads details={bannerData} />
    <Carousel details={carouselData}/>
    <TopPicks details={topPicksData}/>
    <ServiceOfTheMonth details={serviceOfTheMonth}/>
    <Ads details={bannerData} />
    <Carousel details={carouselData}/>
    <Ads details={bannerData} />
    <Gallery />
    <Ads details={bannerData} />
    <Store />
    <Footer />
    </SafeAreaView>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
  }
})

export default Home