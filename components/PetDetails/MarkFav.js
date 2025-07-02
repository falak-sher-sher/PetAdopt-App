import { View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useUser } from '@clerk/clerk-expo';
import shared from '../../Shared/shared'

export default function MarkFav({ PetList }) {
  const { user } = useUser();
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    if (user) GetFav();
  }, [user]);

  const GetFav = async () => {
    const result = await shared.getFavList(user)
    setFavList(result.favourites ? result.favourites : []);
  }

  const handleFav = async () => {
    let updatedFavs;
    if (favList.includes(PetList.id)) {
      // Remove from favorites
      updatedFavs = favList.filter(id => id !== PetList.id);
    } else {
      // Add to favorites
      updatedFavs = [...favList, PetList.id];
    }
    await shared.UpdateFav(user, updatedFavs);
    setFavList(updatedFavs); // update UI immediately
  }

  return (
    <View>
      <Pressable onPress={handleFav}>
        <AntDesign
          name={favList.includes(PetList.id) ? "heart" : "hearto"}
          size={30}
          color={favList.includes(PetList.id) ? 'red' : 'black'}
        />
      </Pressable>
    </View>
  )
}