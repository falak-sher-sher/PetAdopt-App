import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { FlatList, Text, View,Image, Dimensions } from 'react-native'
import { db } from '../../config/firebaseConfig'

export default function Slider() {
    const [sliders, setSliders] = useState([]);
    useEffect(()=>{
        GetSliders();
    },[])
    const GetSliders=async()=>{
        const snpashot = await getDocs(collection(db,'Sliders'));
        snpashot.forEach((doc)=>{
            console.log(doc.data());
            setSliders(sliders=>[...sliders,doc.data()])
        })
    }
  return (
    <View style={{
            marginTop:20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 7,
                
            resizeMode:'cover'}}>
      <FlatList
      data={sliders}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View>
            <Image
            source={{uri:item?.imageUrl}}
            style={{width:Dimensions.get('screen').width*0.9,height:160,
                borderRadius:15,marginRight:10,
                }}
            />
        </View>
      )}
      />
    </View>
  )
}