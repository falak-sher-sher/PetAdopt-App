import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, TouchableOpacity, View,Text } from 'react-native';
import PetInfo from '../../components/PetDetails/petinfo';
import PetSubInfo from '../../components/PetDetails/petsubinfo';
import AboutPet from '../../components/PetDetails/aboutpet';
import OwnerIfno from '../../components/PetDetails/ownerifno';

export default function petDetails() {
  const PetList=useLocalSearchParams();
  const navigation=useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
    });
  }, [navigation]);

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
        <TouchableOpacity>
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