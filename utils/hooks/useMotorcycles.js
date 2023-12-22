import { useState, useEffect, useCallback, useMemo } from 'react'
import { queryMotorcycle } from "@/utils/db";


export const useMotorcycles = (makeFilter, priceFilter) => {
    const [motorcycles, setMotorcycles] = useState([]);
    const [selectedSortIdx, setSelectedFilterIdx] = useState(0)
    const [selectedBrandIdx, setSelectedBrandIdx] = useState(0)

    const sortOptions = [
      "Year: newest First",
      "Year: oldest First",
      "Price: highest first",
      "Price: lowest first",
      // "Best Selling",
    ]

    const brandOptions = [
      "All",
      "Yamaha",
      "Honda",
      "SYM"
    ]

    const onFilterOptionChange = useCallback((event) => {
      setSelectedFilterIdx(Number(event.target.value))
    }, [])

    const onBrandOptionChange = useCallback((event) => {
      setSelectedBrandIdx(Number(event.target.value))
    }, [])

    const queryParams = useMemo(() => {
      const filterParams = {
        sortedBy: [],
        filterOpt: [],
        limitResult: null
      }

      if (selectedSortIdx === 0) {
        filterParams.sortedBy = [{ fieldToSort: 'year', sortOrder: 'desc' }]
      } else if (selectedSortIdx === 1) {
        filterParams.sortedBy = [{ fieldToSort: 'year' }]
      } else if (selectedSortIdx === 2) {
        filterParams.sortedBy = [{ fieldToSort: 'price', sortOrder: 'desc' }]
      } else {
        filterParams.sortedBy = [{ fieldToSort: 'price' }]
      }

      if (selectedBrandIdx !== 0) {
        filterParams.filterOpt = [{ fieldToFilter: 'brand', operator: '==', filterValue: brandOptions[selectedBrandIdx] }]
      }

      return filterParams
    }, [selectedSortIdx, selectedBrandIdx])

    useEffect(() => {
        const fetchMotorcycles = async () => {
          try {
            let motorcycles = await queryMotorcycle(queryParams);
            setMotorcycles(motorcycles);
          } catch (error) {
            console.error('Failed to fetch motorcycles:', error);
          }
        }
    
        fetchMotorcycles();
    }, [queryParams])

    return {
      motorcycles,
      sortOptions,
      brandOptions,
      selectedSortIdx,
      selectedBrandIdx,
      useMotorcycles,
      onFilterOptionChange,
      onBrandOptionChange,
    }
}