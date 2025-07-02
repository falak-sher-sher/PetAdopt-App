import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react';
import MarkFav from './MarkFav';

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
       <MarkFav PetList={PetList}/>
      </View>
            
    </View>
  )
}