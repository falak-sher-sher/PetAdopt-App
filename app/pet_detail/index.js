import { useUser } from '@clerk/clerk-expo';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AboutPet from '../../components/PetDetails/aboutpet';
import OwnerIfno from '../../components/PetDetails/ownerifno';
import PetInfo from '../../components/PetDetails/petinfo';
import PetSubInfo from '../../components/PetDetails/petsubinfo';
import { db } from '../../config/firebaseConfig';

export default function petDetails() {
  const PetList=useLocalSearchParams();
  const {user}=useUser();
  const navigation=useNavigation();
  const router=useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
    });
  }, [navigation]);

  //Use to initial chat between user and pet owner
    const initialChat=async ()=>{
    try{
    const docId = user?.id;
    const petId = PetList.id;
    const chatRef = doc(db, 'Chats', `${docId}_${petId}`);
    const chatDoc=await getDoc(chatRef);
    const userData = {
      petId: petId,
      userId: docId,
      userEmail: user?.primaryEmailAddress?.emailAddress || '',
      userName: user?.username || '',
      userUrl: user?.userUrl || '',
      createdAt: serverTimestamp(),
    };

    if(!chatDoc.exists()){
      await setDoc(chatRef, userData);
    } else {
      await updateDoc(chatRef, userData);
    }
    router.push({
      pathname: '/Chat',
      params: { petId, userId: docId,userName:userData.userName,userUrl:userData.userUrl,userEmail:userData.userEmail },
    });
    } catch (error) {
      console.log(error);
    }
}

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Pet Info */}
        <PetInfo PetList={PetList} />
        {/* Pet SubInfo */}
        <PetSubInfo PetList={PetList} />
        {/* about */}
        <AboutPet PetList={PetList} />
        {/* owner info  */}
        <OwnerIfno PetList={PetList} />
      </ScrollView>
      {/* Adopt me btn */}
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 20,
          padding: 15,
          backgroundColor: '#fff1c9',
          borderRadius: 15,
          marginHorizontal: 10,
          marginBottom: 15,
          alignItems: 'center',
          shadowColor:'#000',
          shadowRadius:15,
          elevation:9,
        }}
      >
        <TouchableOpacity onPress={initialChat}>
          <Text
            style={{
              fontFamily: 'outfit-medium',
              textAlign: 'center',
              fontSize: 20,
              color: '#000',
            }}
          >Adopt Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}