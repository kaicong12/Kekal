import {getDownloadURL, ref} from "firebase/storage"
import { collection, getDocs, doc, getDoc, query, orderBy, limit, where } from "firebase/firestore";
import {db, storage} from "@/utils/firebase";
import { filter, sort } from "@/data/menuItems";

const retrieveImageUrl = (path) => {
    // getDownloadUrl will not work on empty path
    if (path === "") {
        return null
    }

    const storageRef = ref(storage, path);
    return getDownloadURL(storageRef)
}

export const listMotorcycles = async () => {
    const motorcycleCollection = collection(db, 'motorcycles');
    const motorcycleSnapshot = await getDocs(motorcycleCollection);
    return await Promise.all(motorcycleSnapshot.docs.map(async doc => {
        const res = {id: doc.id, ...doc.data()};
        res.imageUrl = await retrieveImageUrl(res.path)

        return res
    }));
}

export const getMotorcycleById = async (motorcycleId) => {
    try {
        const docRef = doc(db, "motorcycles", motorcycleId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          return null;
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
        return null
    }
}

export const queryMotorcycle = async ({ sortedBy, filterOpt, limitResult }) => {
  const dbRef = collection(db, 'motorcycles');

  const queryParams = []
  if (sortedBy.length) {
    sortedBy.forEach(sortedOption => {
      const { fieldToSort, sortOrder } = sortedOption
      const sortQuery = sortOrder ? orderBy(fieldToSort, sortOrder) : orderBy(fieldToSort)
      queryParams.push(sortQuery)
    })
  }

  if (filterOpt.length) {
    filterOpt.forEach(filterOption => {
      const { fieldToFilter, operator, filterValue } = filterOption
      const filterQuery = where(fieldToFilter, operator, filterValue)
      queryParams.push(filterQuery)
    })
  }

  if (limitResult) {
    queryParams.push(limit(limitResult))
  }

  const q = query(dbRef, ...queryParams)
  const querySnapshot = await getDocs(q)

  return await Promise.all(querySnapshot.docs.map(async doc => {
    const res = {id: doc.id, ...doc.data()};
    res.imageUrl = await retrieveImageUrl(res.path)

    return res
  }))
}
