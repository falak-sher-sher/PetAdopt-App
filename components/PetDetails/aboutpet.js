import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function AboutPet({PetList}) {
    const [read,setReasd]=useState(true);
  return (
    <View
    style={{
        paddingLeft:10,
    }}
    >
      <Text
      style={{
        fontFamily: 'outfit-medium',
        fontSize: 20,
        
        
      }}
      >About {PetList.name}</Text>
      <Text
      numberOfLines={read?3:20}
      style={{
        fontFamily: 'outfit',
        fontSize: 14,
        color: 'gray',
        
        
        
      }}
      
      >{PetList.about} </Text>
      {read&&
      <Pressable
      onPress={()=>setReasd(false)}
      >
      <Text
      style={{
        fontFamily:'outfit-medium',
        fontSize: 14,
        color: 'blue',
        opacity: 0.7,
      }}
      >Read More</Text></Pressable>}
    </View>
  )
}