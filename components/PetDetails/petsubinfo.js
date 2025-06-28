import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function PetSubInfo({PetList}) {
  return (
    <View
    style={{
        padding:15,
    }}
    >
        <View
        style={{
            display:'flex',
            flexDirection: 'row',
            
            
        }}
        >
            <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                padding: 15,
                backgroundColor: 'white',
                borderRadius: 15,
                shadowColor:'#000',
                shadowRadius:15,
                elevation:9,
                margin:5,
                flex: 1,
            }}
            >
                <Image
                source={require('../../assets/images/calendar.png')}
                style={{
                    width: 40,
                    height: 40,
                   
                }}
                />
                <View>
                    <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 16,
                    }}
                    >Age</Text>
                    <Text
                    style={{
                        fontFamily: 'outfit-regular',
                        fontSize: 14,
                        color: 'gray',
                    }}
                    >{PetList.age}</Text>
                </View>
            </View>
             <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 15,
                shadowColor:'#000',
                shadowRadius:15,
                elevation:9,
                margin:5,
                flex: 1,
            }}
            >
                <Image
                source={require('../../assets/images/bone.png')}
                style={{
                    width: 40,
                    height: 40,
                   
                }}
                />
                <View>
                    <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 16,
                    }}
                    >Bread</Text>
                    <Text
                    style={{
                        fontFamily: 'outfit-regular',
                        fontSize: 10,
                        color: 'gray',
                        
                    }}
                    >{PetList.bread}</Text>
                </View>
            </View>
        </View>
        <View
        style={{
            display:'flex',
            flexDirection: 'row',
        }}
        >
            <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 15,
                shadowColor:'#000',
                shadowRadius:15,
                elevation:9,
                margin:5,
                flex: 1,
            }}
            >
                <Image
                source={require('../../assets/images/sex.png')}
                style={{
                    width: 40,
                    height: 40,
                   
                }}
                />
                <View>
                    <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 16,
                    }}
                    >sex</Text>
                    <Text
                    style={{
                        fontFamily: 'outfit-regular',
                        fontSize: 14,
                        color: 'gray',
                    }}
                    >{PetList.sex}</Text>
                </View>
            </View>
             <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 15,
                shadowColor:'#000',
                shadowRadius:15,
                elevation:9,
                margin:5,
                flex: 1,
            }}
            >
                <Image
                source={require('../../assets/images/weight.png')}
                style={{
                    width: 40,
                    height: 40,
                   
                }}
                />
                <View>
                    <Text
                    style={{
                        fontFamily: 'outfit-bold',
                        fontSize: 16,
                    }}
                    >weight</Text>
                    <Text
                    style={{
                        fontFamily: 'outfit-regular',
                        fontSize: 14,
                        color: 'gray',
                    }}
                    >{PetList.age}kg</Text>
                </View>
            </View>
        </View>
        
      
    </View>
  )
}