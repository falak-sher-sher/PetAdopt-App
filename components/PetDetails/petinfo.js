import { Image, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
export default function PetInfo({PetList}) {
    const [like,setLike]=useState(false)
  return (
    <View>
      <Image
      source={{ uri: PetList.imageUrl }}
      style={{
        width: '100%',
        height: 300,
        objectFit: 'cover',
        borderRadius: 7,
        
      }}
      />
      <View
      style={{
        padding:20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      >
        <View>
            <Text
            style={{
              fontFamily: 'outfit-bold',
              fontSize:27,
            }}>
                {PetList.name}
            </Text>
            <Text
            style={{
                fontFamily: 'outfit-regular',
                fontSize: 16,
                color: 'gray ',
                
            }}
            >{PetList.address}</Text>
        </View>
        <TouchableOpacity onPress={()=> setLike(!like)}>
      <AntDesign name={like? 'heart': 'hearto'} size={30} color={like? 'red':'black'} />
      </TouchableOpacity>
      </View>
    </View>
  )
}