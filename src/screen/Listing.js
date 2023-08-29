import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "react-native-linear-gradient"
import Topbar from './Topbar';

const Listing = () => {

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}
    onScroll={(e) => {
        const Y = e.nativeEvent.contentOffset.y;
    }}
    style={{marginLeft: 40}}>
        <View style={{flexDirection: 'row', width: '100%', backgroundColor : 'black'}}>
            <View style={{width: '30%'}}>
            </View>
            <Image source={require('../img/mario.png')} style={{width: "70%", height: 300, resizeMode: 'stretch', alignSelf:'center'}} />
            <LinearGradient 
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}} 
            colors={["black", "black",'#00000000']} 
            style={{width: '75%', height: 300, position: 'absolute'}}>
                <View style={{marginLeft: 20, paddingTop: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 140, marginLeft: 70, marginTop: 20}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>NETFLIX</Text>
                        <Text style={{fontSize: 16}}>ORIGINAL</Text>
                    </View>
                    <Text style={{width: 350, marginLeft: 50, marginTop: 10, fontSize: 40, fontWeight: 'bold', color: '#b51212'}}>SUPER MARIO</Text>
                    <View  style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: 120, marginLeft: 50}}>
                            <Text><Icon name='star' size={20} color={'#b51212'}/></Text>
                            <Text><Icon name='star' size={20} color={'#b51212'}/></Text>
                            <Text><Icon name='star' size={20} color={'#b51212'}/></Text>
                            <Text><Icon name='star' size={20} color={'#b51212'}/></Text>
                            <Text><Icon name='star' size={20} color={'#b51212'}/></Text>   
                        </View>
                        <Text  style={{fontSize: 15}}>2016  2 Seasons</Text>
                        <LinearGradient colors={['gray','gray', '#262625']} style={{paddingHorizontal: 8, marginLeft: 20, borderRadius: 3, }}>
                        <View style={{flexDirection: 'row', }}>
                            <Text style={{color: 'black', fontWeight:'400', fontSize: 17}}>ULTRA</Text>
                            <Text style={{color: 'black', fontWeight: '600', fontSize: 17}}> HD 4K</Text>   
                        </View>
                        </LinearGradient>  
                        <LinearGradient colors={['gray','gray', '#262625']} style={{marginLeft: 5,borderRadius: 3}}>
                            <Text style={{color: 'black', paddingHorizontal: 3, marginLeft: 5, fontWeight: '600', fontSize: 17 , borderRadius: 3}}>5.1</Text>
                        </LinearGradient>

                    </View>
                    <Text style={{marginLeft: 60, marginTop: 5, fontSize: 16}}>{"Blinded as a young boy, Matt Murdock fights\ninjustice by day as a lawyer and by night as\nthe Super Hero Daredevil in Hell's Kitchen,\nNew York City."}</Text>
                    <Text style={{fontStyle: 'italic', marginLeft: 60, marginTop: 5}}>{"Charlie Cox, Deborah Ann Woll, Elden Henson\nTV Shows, Crime TV Shows"}</Text>
                </View>
            </LinearGradient>
                <LinearGradient 
                    colors={["#00000000", "#00000000","#000000",'black']} 
                    style={{height : '50%', width : '100%', position: 'absolute', marginTop: 200}}>
                </LinearGradient>
                
        


        </View>

        <Text style={{marginLeft: 105, fontSize: 20}}>My List</Text>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}>
                <Image style={[styles.imges, styles.imgesafterfoces]} source={require('../img/img1.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img2.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img3.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img4.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img5.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img6.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img7.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img8.png')} />
            </ScrollView>
        <Text style={{marginLeft: 105, fontSize: 20}}>Recently Viewed</Text>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}>
                <Image style={[styles.imges, styles.imgesafterfoces]} source={require('../img/img1.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img2.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img3.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img4.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img5.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img6.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img7.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img8.png')} />
            </ScrollView>
        <Text style={{marginLeft: 105, fontSize: 20}}>Popular Content</Text>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}>
                <Image style={[styles.imges, styles.imgesafterfoces]} source={require('../img/img1.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img2.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img3.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img4.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img5.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img6.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img7.png')} />
                <Image style={[styles.imges, ]} source={require('../img/img8.png')} />
            </ScrollView>
    </ScrollView>

    </>
  )
}

export default Listing

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