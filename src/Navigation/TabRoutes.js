import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from '../screens'
import NavigationStrings from '../constants/NavigationStrings';

const TabRoutes = () => {

    const Tab = createBottomTabNavigator();

  return (
     <Tab.Navigator 
     initialRouteName={NavigationStrings.HOME}
     screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
     
     >
      <Tab.Screen 
      name={NavigationStrings.HOME} 
      component={Screens.Home} 
      options={{
        tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center', }} >
              <Icon name='home' size={20} style={{color: focused ? "black" : "gray"}}/> 
              <Text style={{color: focused ? "black" : "gray"}}>Home</Text>
            </View> 
        )
      }}
      />
      <Tab.Screen 
      name={NavigationStrings.BOOKING} 
      component={Screens.Booking} 
      options={{ 
        tabBarIcon: ({focused}) => (
          <View style={{justifyContent: 'center', alignItems: 'center', }} >
            <Icon name='newspaper-o' size={20} style={{color: focused ? "black" : "gray"}}/> 
            <Text style={{color: focused ? "black" : "gray"}}>Bookings</Text>
          </View>
        )
        }}
      />
      <Tab.Screen 
      name={NavigationStrings.GALLERY} 
      component={Screens.Gallery} 
      options={{ 
        tabBarIcon: ({focused}) => (
          <View style={{justifyContent: 'center', alignItems: 'center', }} >
            <Icon name='file-photo-o' size={20} style={{color: focused ? "black" : "gray"}}/> 
            <Text style={{color: focused ? "black" : "gray"}}>Gallery</Text>
          </View>
        )
        }}
      />
      <Tab.Screen 
      name={NavigationStrings.CART} 
      component={Screens.Cart} 
      options={{ 
        tabBarIcon: ({focused}) => (
          <View style={{justifyContent: 'center', alignItems: 'center', }} >
            <Icon name='shopping-cart' size={20} style={{color: focused ? "black" : "gray"}}/> 
            <Text style={{color: focused ? "black" : "gray"}}>Cart</Text>
          </View>
        )
        }}
      />
      <Tab.Screen 
      name={NavigationStrings.STORE} 
      component={Screens.Store} 
      options={{ 
        tabBarIcon: ({focused}) => (
          <View style={{justifyContent: 'center', alignItems: 'center', }} >
            <Icon name='shopping-bag' size={20} style={{color: focused ? "black" : "gray"}}/> 
            <Text style={{color: focused ? "black" : "gray"}}>Store</Text>
          </View>
        )
        }}
      />
      <Tab.Screen 
      name={NavigationStrings.PROFILE} 
      component={Screens.Profile} 
      options={{ 
        tabBarIcon: ({focused}) => (
          <View style={{justifyContent: 'center', alignItems: 'center', }} >
            <Icon name='user' size={20} style={{color: focused ? "black" : "gray"}}/> 
            <Text style={{color: focused ? "black" : "gray"}}>Profile</Text>
          </View>
        )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabRoutes