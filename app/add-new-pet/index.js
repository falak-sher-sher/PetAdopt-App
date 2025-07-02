import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function AddNewPet() {
  return (
    <View
    style={{
        padding: 20,
        marginTop: 20,
    }}
    >
      <Text
      style={{
        fontFamily: 'outfit-bold',
        fontSize: 20,
      }}
      >Add New Pet for adoption</Text>
      <View
  style={{
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#ffffff', // make sure this has 6 f's!
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 4,
  }}
>
  <FontAwesome name="paw" size={30} color="gray" />
</View>

      <View
      style={{
        marginVertical: 8,
      }}
      >
        <Text>Pet Name *</Text>
        <View
  style={{
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5, // important for Android
  }}
>
  <TextInput
    style={{
      borderWidth: 1,
      borderColor: 'gray',
      opacity: 0.5,
      borderRadius: 15,
      padding: 10,
      fontSize: 16,
    }}
    placeholder="Enter Pet Name"
    placeholderTextColor="gray"
    onChangeText={(text) => setPetName(text)}
    // value={petName}
  />
</View>
<Text>Pet bread *</Text>
<View
  style={{
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5, // important for Android
  }}
>
  <TextInput
    style={{
      borderWidth: 1,
      borderColor: 'gray',
      opacity: 0.5,
      borderRadius: 15,
      padding: 10,
      fontSize: 16,
    }}
    placeholder="Enter Pet bread"
    placeholderTextColor="gray"
    onChangeText={(text) => setPetName(text)}
    // value={petName}
  />
</View>
<Text>Pet age *</Text>
<View
  style={{
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5, // important for Android
  }}
>
  <TextInput
    style={{
      borderWidth: 1,
      borderColor: 'gray',
      opacity: 0.5,
      borderRadius: 15,
      padding: 10,
      fontSize: 16,
    }}
    placeholder="Enter Pet age"
    placeholderTextColor="gray"
    onChangeText={(text) => setPetName(text)}
    // value={petName}
  />
</View>
<Text>Pet about *</Text>
<View
  style={{
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5, // important for Android
  }}
>
  <TextInput
    style={{
      borderWidth: 1,
      borderColor: 'gray',
      opacity: 0.5,
      borderRadius: 15,
      padding: 10,  
      paddingHorizontal: 10,
      paddingVertical: 10,
      paddingTop: 10, 
      paddingBottom: 10,
      fontSize: 16,
      height: 100,
    }}
    placeholder=""
    placeholderTextColor="gray"
    onChangeText={(text) => setPetName(text)}
    // value={petName}
  />
</View>

      </View>
      <View
style={{
  
  opacity: 0.7,
  
  marginTop: 30,
  marginVertical: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 7 },
  shadowOpacity: 0.4,
  shadowRadius: 10,
  elevation: 7,
}}
>
<TouchableOpacity
style={{
      backgroundColor: '#fff1c9',
     
  padding: 15,
  borderRadius: 5,
 
  alignItems: 'center',
  justifyContent: 'center',
}}
>
  
<Text
style={{
  fontFamily: 'outfit-bold',
  fontSize: 16,
  color: '#000',
  opacity: 0.5,
}}
>Submit</Text>
</TouchableOpacity>
</View>
    </View>
  )
}