import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "react-native-linear-gradient"
const Topbar = () => {
  return (
    <View style={{flexDirection: 'row', position: 'absolute', zIndex: 4}}>
    <View style={{flexDirection: 'row', marginLeft: 40, alignItems: 'center', justifyContent: "space-between", width: "40%", flex: 2}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#b51212'}}>NETFLIX</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white'}}>Home</Text>
        <Text style={{fontSize: 12, color: 'white'}}>TV Shows</Text>
        <Text style={{fontSize: 12, color: 'white'}}>Movies</Text>
        <Text style={{fontSize: 12, color: 'white'}}>Recently Added</Text>
        <Text style={{fontSize: 12, color: 'white'}}>My List</Text>
    </View>
    <View style={{flex: 1.5}}></View>
    <View style={{flexDirection: 'row',flex: 1, alignItems: 'center', justifyContent: 'space-between', marginRight: 40,}}>
        <Text><Icon name='search' /></Text>
        <Text style={{fontSize: 12, color: 'white'}}>KIDS</Text>
        <Text style={{fontSize: 12, color: 'white'}}>DVD</Text>
        <Text><Icon name='bell' color={"white"}/></Text>
        <Text><Icon name='address-card-o' color={"white"}/></Text>
    </View>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({})