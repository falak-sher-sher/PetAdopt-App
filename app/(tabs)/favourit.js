import { useUser } from '@clerk/clerk-expo'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import PetInfo from '../../components/PetDetails/petinfo'
import { db } from '../../config/firebaseConfig'
import shared from '../../Shared/shared'
import PetListItem from '../../components/Home/PetListItem'

export default function favourit({PetList}) {
  const { user } = useUser()
  const [favList, setFavList] = useState([])
  const [petList, setPetList] = useState([])

  // Fetch favList when user changes
  useEffect(() => {
    if (user) {
      GetFav()
    }
  }, [user])

  // Fetch petList when favList changes
  useEffect(() => {
    if (favList.length > 0 && favList.length <= 10) {
      GetPetList()
    } else {
      setPetList([]) // clear petList if no favorites or too many
      if (favList.length > 10) {
        console.warn('Firestore "in" query only supports up to 10 items. Showing no favourites.')
      }
    }
  }, [favList])

  // Get favorite IDs
  const GetFav = async () => {
    const result = await shared.getFavList(user)
    setFavList(result.favourites ? result.favourites : [])
    console.log('favList:', result.favourites)
  }

  // Fetch pet info for favorite IDs
  const GetPetList = async () => {
    if (favList.length === 0 || favList.length > 10) {
      setPetList([])
      return
    }
    const q = query(collection(db, 'PetList'), where('id', 'in', favList))
    const querySnapshot = await getDocs(q)
    const pets = []
    querySnapshot.forEach(doc => {
      pets.push(doc.data())
    })
    console.log('Fetched pets:', pets)
    setPetList(pets)
  }

  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 20,
      }}>Favourites</Text>
      <FlatList
        data={petList}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View style={{ marginBottom: 20 }}>
            <PetListItem PetList={item} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>No favourites found.</Text>}
      />
    </View>
  )
}