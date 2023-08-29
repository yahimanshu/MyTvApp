import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const [foces , setFoces] = useState(-1);
    const navigation = useNavigation()

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'black'}}>
    <View style={{height: '100%', width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: '20%', backgroundColor: 'black'}}>

        <TouchableOpacity 
        onPress={() => {
            setFoces(0)
            setTimeout(() => {
                navigation.navigate("Home")
            }, 1000);
        }}>
            <View style={[{width: 100, height: 100, backgroundColor: 'red',  borderRadius: 8, alignItems: 'center', justifyContent: 'center'}, {borderWidth: foces == 0 ? 2 : 0, borderColor: 'white'}]}>
                <Text>
                    <Icon name='smile-o' size={90} color ={foces == 0 ? "#ffffff" : '#000000'} />
                </Text> 
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            setFoces(1)
            console.log("running")
            setTimeout(() => {
                navigation.navigate("Home")
            }, 1000);
        }}>
            <View style={[{width: 100, height: 100, backgroundColor: 'blue',borderRadius: 8, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center'}, foces == 1 ? {borderWidth: 1, borderColor: 'white'} : '']}>
                <Text>
                    <Icon name='user-circle' size={80} color ={foces == 1 ? "#ffffff" : '#000000'} />
                </Text> 
            </View>
            
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            navigation.navigate('VideoPlayer')
            setFoces(2)
        }}>
            <View style={[{width: 100, height: 100, backgroundColor: 'gray',borderRadius: 8, alignItems: 'center', justifyContent: 'center'}, foces == 2 ? {borderWidth: 1, borderColor: 'white'} : '']}>
                <Text>
                    <Icon name='plus' size={80} color ={foces == 2 ? "#ffffff" : '#000000'} />
                </Text> 
            </View>
            
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})