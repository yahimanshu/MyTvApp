import { View, Text , StyleSheet, Image, Animated} from 'react-native'
import React, { useEffect, useRef } from 'react'
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

    const navigation = useNavigation()
      useEffect(() => {
          setTimeout(() => {
            navigation.navigate("Login")
          }, 4000);
      })
  
      

  
    return (
      <View style={styles.container}>
        {/* <FastImage source={{uri: 'https://i.pinimg.com/originals/57/28/ae/5728aef13f51223982c0b8f9d71c0aba.gif'}} */}
        <FastImage source={require('../img/netflix.gif')}
         style={{ width: "100%", height: "100%" }}
         resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    )
  }
  
  export default Splash
  
  const styles = StyleSheet.create({
  
      container:{
          backgroundColor: 'black',
          height: "100%",
          width: '100%'
      },
  })