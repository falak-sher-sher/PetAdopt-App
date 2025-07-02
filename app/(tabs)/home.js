import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import PetListByCategory from '../../components/Home/PetListByCategory'
import { useRouter } from 'expo-router'

export default function home() {
  const router = useRouter()
  return (
    <View style={{
      padding: 20,
      marginTop: 20,
    }}>
      {/* Header  */}
      <Header/>

      {/* Slider  */}
       <Slider/>
      {/* /* List of pets   Categaries  */}

      <PetListByCategory/>
      
      <TouchableOpacity
      onPress={() => router.push('/add-new-pet')}
      >
       <View
       style={{
        flexDirection: 'row',
        alignItems: 'center',
        
        justifyContent: 'center',
        padding: 12,
        backgroundColor: '#fff1c9',
        borderRadius: 15,
        marginTop: 0,
        shadowColor:'#000',
        shadowRadius:15,
        elevation:9,
        marginBottom: 30,
        
        gap: 10,
       }}
       >
        
        <MaterialIcons name="pets" size={24} color="#4faaff" />
        <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 16,
          color: '#4faaff',
          
        }}
        >Add new Pet</Text>
        
       </View>
       </TouchableOpacity>
       
      {/* Add new pet options  */}
    
    </View>
  )
}