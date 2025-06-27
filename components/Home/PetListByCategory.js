import { collection, getDocs, query,where } from 'firebase/firestore'
import { FlatList, View } from 'react-native'
import { db } from '../../config/firebaseConfig'
import Category from './Category'
import { useEffect, useState } from 'react';
import PetListItem from './PetListItem';


export default function PetListByCategory() {
  // Reset petList when component mounts
  useEffect(() => {
    GetPetList('Dog');
  }, []);
  
  {/* @param {*} petList */}
  const [petList, setPetList] = useState([]);
  const [Loader,setLoader] = useState(false);
  /**
 * @param {string} category
 * */
  const GetPetList=async (category)=>{
    setPetList([]); 
    setLoader(true);
  const q=query(collection(db,'PetList'),where('category','==',category));
 const querySnapshot=await getDocs(q);
 querySnapshot.forEach(doc => {
   
   setPetList(petList=>[...petList,doc.data()])

})
setLoader(false);
  }
  return (
    <View>
      
      <Category category={(value)=>GetPetList(value)} />
    <FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}

  data={petList}
  refreshing={Loader}
  onRefresh={()=>GetPetList('Dog')}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => (
    <PetListItem PetList={item} />
  )}
/>

    </View>
  )
}