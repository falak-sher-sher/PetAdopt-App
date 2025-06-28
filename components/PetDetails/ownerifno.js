import { View, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function  OwnerIfno({PetList}) {
  return (
    <View>
    <View
    style={{
        paddingHorizontal:15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0', 
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor:'#000',
        shadowRadius:15,
        elevation:9,
        margin:8,
        flex: 1,
    }}
    >
        <Image
        source={{ uri: PetList.userUrl }}
        style={{
            width: 50,
            height: 50,
            borderRadius: 99,
            objectFit: 'cover',
            
        }}
        />
        <View>
      <Text
    style={{
        fontFamily: 'outfit-medium',
        fontSize: 17,
       
       
    }}
    >{PetList.username}</Text>
    <Text
    style={{
        fontFamily:'outfit',
        fontSize: 14,
        color: 'gray',
    }}
    >Pet Owner</Text>
    </View>
    <FontAwesome name="send-o" size={24} color="black" style={{
        marginLeft: 'auto',
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#f0f0f0',
    }}/>
    </View>
    
    </View>
  )
}