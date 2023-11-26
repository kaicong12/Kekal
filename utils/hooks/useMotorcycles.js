import { useState, useEffect } from 'react'
import {listMotorcycles} from "@/utils/db";


export const useMotorcycles = () => {
    const [motorcycles, setmotorcycles] = useState([]);

    useEffect(() => {
        const fetchMotorcycles = async () => {
          let motorcycles = await listMotorcycles()
          setmotorcycles(motorcycles)
        }
    
        fetchMotorcycles();
    }, [])

    return [motorcycles, setmotorcycles]
}