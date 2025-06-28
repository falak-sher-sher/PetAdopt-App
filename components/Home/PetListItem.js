import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function PetListItem({PetList}) {
  const router=useRouter();
  return (
    <TouchableOpacity
    
    onPress={()=> router.push({
      pathname: '/pet_detail',
    params:PetList})}>
    <View
    style={{
        padding: 10,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 20,
    }}
    >
      <Image
        source={{ uri: PetList.imageUrl }}
      style={{
        width: 150,
        height: 135,
        borderRadius: 10,
        objectFit: 'cover',
      }}
      />
      <Text style={{
        fontFamily: 'outfit-regular',
        fontSize: 16,
        color: '#000',
        marginTop: 5,
        
      }}>{PetList.name}</Text>
      <View
      style={{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      
      >
        <Text
        style={{
            fontFamily: 'outfit-regular',
            fontSize: 14,
            color: '#000',
            marginTop: 5,
        }}
        >{PetList.bread}</Text>
        <Text style={{
            fontSize: 10,
            fontFamily: 'outfit-regular',
            color: 'gray',
            borderRadius: 10,
            opacity: 0.4,
            marginTop: 10,
        }}>{PetList.age} Yrs</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}
