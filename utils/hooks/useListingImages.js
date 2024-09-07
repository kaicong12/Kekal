import { useState, useEffect } from 'react'
import { storage } from "@/utils/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage"


export const useListingImages = (brand, modelName) => {
    const [listingImages, setListingImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getAllImageLinks = async () => {
            setIsLoading(true);
            const storageRef = ref(storage, `/${brand}/${modelName}`)
            const allImages = await listAll(storageRef);
            const allImageLinks = await Promise.all(allImages.items.map(async (imageRef) => ({ imageSrc: await getDownloadURL(imageRef) })))
            setListingImages(allImageLinks)
            setIsLoading(false);
        }
        
        getAllImageLinks()
    }, [brand, modelName])

    return {
        isLoading,
        listingImages,
    }
}