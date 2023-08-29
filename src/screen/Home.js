import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "react-native-linear-gradient"
import SideMenu from './SideMenu';
import Listing from './Listing';
import Topbar from './Topbar';





const Home = () => {

    const [foces , setFoces] = useState(-1);
    const [sidebar, setSidebar] = useState(false);



  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'black'}}>

        <Topbar />

    <View style={{flexDirection: 'row'}}>

        <SideMenu open={false} />
          
        <Listing />

        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    imges:{
        width: 230,
        height:130,
        marginHorizontal: 3
    },
    imgesafterfoces:{
        borderWidth: 3,
        borderColor: 'white'
    }
})