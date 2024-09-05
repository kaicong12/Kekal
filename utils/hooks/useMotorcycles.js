import { useState, useEffect, useCallback, useMemo } from 'react'
import { queryMotorcycle, fetchUniqueBrandSet } from "@/utils/db";


export const useMotorcycles = (makeFilter, priceFilter) => {
    const [motorcycles, setMotorcycles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSort, setSelectedSort] = useState("Year: newest First")
    const [selectedBrand, setSelectedBrand] = useState(makeFilter)
    const [brandOptions, setBrandOptions] = useState([]); 

    const sortOptions = [
      { value: "Year: newest First", label: "Year: newest First" },
      { value: "Year: oldest First", label: "Year: oldest First" },
      { value: "Price: highest first", label: "Price: highest first" },
      { value: "Price: lowest first", label: "Price: lowest first" }
    ]

    useEffect(() => {
      const fetchBrands = async () => {
        const uniqueBrandSet = await fetchUniqueBrandSet();
  
        // Transform to react-select options format
        const brandOptionsArray = Array.from(uniqueBrandSet).map((brand, index) => ({
          value: index,
          label: brand,
        }));
  
        setBrandOptions(brandOptionsArray);
      };
  
      fetchBrands();
    }, []);

    const onSortOptionChange = useCallback((selectedOption) => {
      if (selectedOption?.value) {
        setSelectedSort(selectedOption.value)
      }
    }, [])

    const onBrandOptionChange = useCallback((selectedOption) => {
      if (selectedOption?.value) {
        setSelectedBrand(selectedOption.value)
      }
    }, [])

    const queryParams = useMemo(() => {
      const filterParams = {
        sortedBy: [],
        filterOpt: [],
        limitResult: null
      }

      if (selectedSort === "Year: newest First") {
        filterParams.sortedBy = [{ fieldToSort: 'year', sortOrder: 'desc' }]
      } else if (selectedSort === "Year: oldest First") {
        filterParams.sortedBy = [{ fieldToSort: 'year' }]
      } else if (selectedSort === "Price: highest first") {
        filterParams.sortedBy = [{ fieldToSort: 'price', sortOrder: 'desc' }]
      } else {
        filterParams.sortedBy = [{ fieldToSort: 'price' }]
      }

      if (selectedBrand?.length) {
        filterParams.filterOpt = [{ fieldToFilter: 'brand', operator: '==', filterValue: selectedBrand }]
      }

      return filterParams
    }, [selectedBrand, selectedSort])

    useEffect(() => {
        const fetchMotorcycles = async () => {
          setLoading(true);
          try {
            let motorcycles = await queryMotorcycle(queryParams);
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
      selectedSort,
      selectedBrand,
      useMotorcycles,
      onSortOptionChange,
      onBrandOptionChange,
    }
}