import {getDownloadURL, ref} from "firebase/storage"
import {collection, getDocs} from "firebase/firestore";
import {db, storage} from "@/utils/firebase";

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