import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "react-native-linear-gradient"


const SideMenu = (props) => {

    const [menu , setMenu] = useState(false)

  return (

    <View style={[{height: "100%", position: 'absolute', zIndex: 3, width: 50}, menu ? {width: 150, backgroundColor: 'rgba(0, 0, 0, 0.8)'} : '']}>
      {menu ?  <View style={{flexDirection: 'row', marginTop: 25}}>
            <View style={{backgroundColor: "red", padding: 5 , borderRadius: 3}}><Icon name='smile-o' size={25}/></View>
            <View>
                <Text>    Himanshu</Text>
                <Text>    xyz@gmail.com</Text>
            </View>
        </View> : ''}
            <TouchableOpacity style={[{justifyContent: 'space-evenly', height: 320 ,marginTop: 60 ,width: "100%", marginLeft: 5},]} onPress={() => {
                    setMenu(!menu)
                }}>
                            <Text><Icon name='search' />{menu ? "    Search" : ''}</Text>
                            <Text><Icon name='home' />{menu ? "    Home" : ''}</Text>
                            <Text><Icon name='tv' />{menu ? "    TV" : ''}</Text>
                            <Text><Icon name='caret-square-o-right' />{menu ? "    Movie" : ''}</Text>
                            <Text><Icon name='plus' />{menu ? "    My List" : ''}</Text>
                            <Text><Icon name='video-camera' />{menu ? "    New" : ''}</Text>
            </TouchableOpacity>


            { menu ? <View style={{justifyContent: "space-between", height: 50, marginTop: 28}}>
                <Text>Settings</Text>
                <Text>Exit NETFLIX</Text>
            </View> : ''}
        </View>
  )
}

export default SideMenu

const styles = StyleSheet.create({})