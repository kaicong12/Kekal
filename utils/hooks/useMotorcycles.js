import { useState, useEffect, useCallback, useMemo } from 'react'
import { queryMotorcycle } from "@/utils/db";


export const useMotorcycles = (makeFilter, priceFilter) => {
    const [motorcycles, setMotorcycles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSortIdx, setSelectedFilterIdx] = useState(0)
    const [selectedBrandIdx, setSelectedBrandIdx] = useState(0)

    const sortOptions = [
      "Year: newest First",
      "Year: oldest First",
      "Price: highest first",
      "Price: lowest first",
      // "Best Selling",
    ]

    const brandOptions = useMemo(() => (
      [
        "All",
        "Yamaha",
        "Honda",
        "SYM"
      ]
    ), []);

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
    }, [selectedSortIdx, selectedBrandIdx, brandOptions])

    useEffect(() => {
        const fetchMotorcycles = async () => {
          setLoading(true);
          try {
            let motorcycles = await queryMotorcycle(queryParams);
            console.log('done query')
            setMotorcycles(motorcycles);
          } catch (error) {
            console.error('Failed to fetch motorcycles:', error);
          } finally {
            setLoading(false);
          }
        }
    
        fetchMotorcycles();
    }, [queryParams])

    return {
      motorcycles,
      loading,
      sortOptions,
      brandOptions,
      selectedSortIdx,
      selectedBrandIdx,
      useMotorcycles,
      onFilterOptionChange,
      onBrandOptionChange,
    }
}