import { useState, useEffect } from 'react'
import { storage } from "@/utils/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage"


export const useListingImages = (brand, modelName) => {
    const [listingImages, setListingImages] = useState([]);

    useEffect(() => {
        const getAllImageLinks = async () => {
            const storageRef = ref(storage, `/listing/${brand}/${modelName}`)
            const allImages = await listAll(storageRef);
            const allImageLinks = await Promise.all(allImages.items.map(async (imageRef) => ({ imageSrc: await getDownloadURL(imageRef) })))
            setListingImages(allImageLinks)
        }
        
        getAllImageLinks()
    }, [])

    return [listingImages, setListingImages]
}