import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from './../config/firebaseConfig';

// Get the user's favorites list
export const getFavList = async (user) => {
  const email = user?.primaryEmailAddress?.emailAddress;
  if (!email) return { favourites: [] };

  const docRef = doc(db, 'UserFavPet', email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // Create the document with empty favourites
    await setDoc(docRef, {
      email: email,
      favourites: []
    });
    return { email, favourites: [] };
  }
};

// Update the user's favorites list
export const UpdateFav = async (user, favArray) => {
  const email = user?.primaryEmailAddress?.emailAddress;
  const docRef = doc(db, 'UserFavPet', email);
  try {
    await setDoc(docRef, {
      email: email,
      favourites: favArray
    });
  } catch (error) {
    console.log(error);
  }
};

export default { getFavList, UpdateFav };