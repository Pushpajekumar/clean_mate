import React from 'react'
import Video from 'react-native-video';
import video from '../../../../assets/images/video3.mp4'
import { View, Text, StyleSheet } from 'react-native'

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Video 
       source={video}
       style={styles.video}
       paused={false}
       repeat={true}  
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:  "100%",
        height: 220,
        backgroundColor: "red"
    },
    video:{
        width: "100%",
        height: "100%"
    }
})

export default VideoPlayer