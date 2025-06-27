import { View, Text } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Image } from 'react-native';

export default function Header() {
    const {user}=useUser();
  return (
    <View
style={{

    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
}}
    >
      <View>
     <Text
     style={{
        fontFamily:'bold',
        fontSize:18,
     }}>Welcome</Text>
     <Text
     style={{
        fontFamily:'regular',
    fontSize:25}}
    // Now I also add dummy name 
     >Falak sher{user?.fullName}</Text>
     
      </View>
      <Image
        // source={{ uri: user?.imageUrl }}
        source={require('../../assets/images/login.png')}
        style={{
          width: 40,
          height: 40,
          borderRadius: 99,}}/>
          
    </View>
  )
}