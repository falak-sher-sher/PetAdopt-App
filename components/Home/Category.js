import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection,  getDocs } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'

export default function Category({ category }) {
    const [categories, setCategories] = useState([]);
    const[selectedCategory, setSelectedCategory] = useState();
    useEffect(() => {
        GetCategory();
    }, []);
    const GetCategory = async () => {
        const snapshot = await getDocs(collection(db, 'Category'));
        const categoryData = [];
        snapshot.forEach((doc) => {
            categoryData.push({ id: doc.id, ...doc.data() });
        });
        setCategories(categoryData);
    };
    return (
        <View style={{
            marginTop: 20,
        }}>
            <Text
                style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20,
                    color: '#000',
                    marginBottom: 10,
                }}
            >Category</Text>
            <FlatList
            numColumns={5}
                data={categories}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{
                        flex:1,
                      }}
                      
                        onPress={() =>{ category(item.name);
                                        setSelectedCategory(item.name)}}
                        activeOpacity={0.7}>
                        <View
                        
                            style={[{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 10,
                                backgroundColor: '#ffffff',
                                borderRadius: 15,
                                marginRight: index % 5 === 4 ? 0 : 10,
                                shadowColor:'#000',
                                shadowRadius:15,
                                elevation:9 ,
                                // Add margin only if not the last item in the row
                            }, selectedCategory === item.name ? { backgroundColor: '#4faaff' } : {}]} 
                             
                        >
                            <Image
                                source={{ uri: item?.imageUrl }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                   
                                }}
                            />
                        </View>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'outfit-regular',
                            marginTop: 5,
                            color: selectedCategory === item.name ? 'blue' : '#000',
                        }}>{item?.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}