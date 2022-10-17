import React from 'react'
import Routes from './src/Navigation/Routes'
import { View, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
  }
})

export default App