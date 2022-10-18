// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack'
import MainStack from './MainStack'



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      }>
       { true ? 
        <>
        {MainStack(Stack)}
         </> :
        <>
        {AuthStack(Stack)}
         </>
       }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;