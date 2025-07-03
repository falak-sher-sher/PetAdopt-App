import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { db } from '../../config/firebaseConfig';

export default function AddNewPet() {
  const [formData, setFormData] = useState({});
  const [selectedGender, setSelectedGender] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [image, setImage] = useState(null);
  useEffect(() => {
    GetCategory();
  }, []);
  // use to pick image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const GetCategory = async () => {
    const snapshot = await getDocs(collection(db, 'Category'));
    const categoryData = [];
    snapshot.forEach((doc) => {
      categoryData.push({ id: doc.id, ...doc.data() });
    });
    setCategories(categoryData);
  };

  const handleSubmit = (fieldname, fieldvalue) => {
    setFormData(prev => ({ ...prev, [fieldname]: fieldvalue }));
  };

  const Submit = () => {
    if(Object.keys(formData).length!=8){
      ToastAndroid.show('Please fill all the fields', ToastAndroid.SHORT);
    }else{
      console.log(formData);
    }
  };

  const inputWrapper = {
    backgroundColor: '#fefefe',
    borderRadius: 15,
    marginVertical: 6,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  };

  const inputStyle = {
    height: 50,
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 10,
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      style={{ padding: 20, marginTop: 20 }}
    >
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>Add New Pet for Adoption</Text>
      <TouchableOpacity onPress={pickImage}>

      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
          backgroundColor: '#ffffff',
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
        
       {!image ? <Image source={require('../../assets/images/paw.png')} style={{ width: '50%', height: '50%',color: 'gray',opacity: 0.5 }} />
        : <Image source={{ uri: image }} style={{ width: '100%', height: '100%',borderRadius: 20 ,resizeMode: 'cover',shadowColor: 'gray',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.5,shadowRadius: 2,elevation: 4}} />}
       
      </View>
      </TouchableOpacity>

      <Text>Pet Name *</Text>
      <View style={inputWrapper}>
        <TextInput
          onChangeText={(value) => handleSubmit('name', value)}
          style={inputStyle}
          placeholder="Enter Pet Name"
          placeholderTextColor="gray"
        />
      </View>

      <Text>Category *</Text>
      <View style={inputWrapper}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => {
            setSelectedCategory(itemValue);
            handleSubmit('category', itemValue);
          }}
        >
          <Picker.Item label="Select Category" value="" />
          {categories.map((category) => (
            <Picker.Item key={category.id} label={category.name} value={category.id} />
          ))}
        </Picker>
      </View>

      <Text>Pet Breed *</Text>
      <View style={inputWrapper}>
        <TextInput
          onChangeText={(value) => handleSubmit('breed', value)}
          style={inputStyle}
          placeholder="Enter Pet Breed"
          placeholderTextColor="gray"
        />
      </View>
      <Text>Pet address *</Text>
      <View style={inputWrapper}>
        <TextInput

          onChangeText={(value) => handleSubmit('address', value)}
          style={inputStyle}
          placeholder="Enter Pet Address"
          placeholderTextColor="gray"
        />
      </View>
      

      <Text>Pet Age *</Text>
      <View style={inputWrapper}>
        <TextInput
        keyboardType='numeric'
          onChangeText={(value) => handleSubmit('age', value)}
          style={inputStyle}
          placeholder="Enter Pet Age"
          placeholderTextColor="gray"
        />
      </View>

      <Text>Gender *</Text>
      <View style={inputWrapper}>
        <Picker
          selectedValue={selectedGender}
          onValueChange={(itemValue) => {
            setSelectedGender(itemValue);
            handleSubmit('gender', itemValue);
          }}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <Text>Pet About *</Text>
      <View style={[inputWrapper, { height: 120 }]}>
        <TextInput
          onChangeText={(value) => handleSubmit('about', value)}
          style={[inputStyle, { height: '100%', textAlignVertical: 'top' }]}
          placeholder="Tell us more about your pet..."
          placeholderTextColor="gray"
          multiline
        />
      </View>

      <View
        style={{
          marginTop: 30,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 7 },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 7,
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
        onPress={Submit}
          style={{
            backgroundColor: '#fff1c9',
            padding: 15,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'outfit-bold',
              padding: 10,
              fontSize: 20,
              color: '#000',
              opacity: 0.7,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
