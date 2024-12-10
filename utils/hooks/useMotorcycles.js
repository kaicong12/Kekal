import { useState, useEffect, useCallback, useMemo } from 'react'
import { queryMotorcycle, fetchUniqueBrandSet } from "@/utils/db";


export const useMotorcycles = (makeFilter, priceFilter) => {
    const [motorcycles, setMotorcycles] = useState([]);
    const [paginatedMotorcycles, setPaginatedMotorcycles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSort, setSelectedSort] = useState("Price: lowest first")
    const [selectedBrand, setSelectedBrand] = useState(makeFilter)
    const [brandOptions, setBrandOptions] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const itemsPerPage = 10;
    const sortOptions = [
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
        filterOpt: []
      }

      if (selectedSort === "Price: highest first") {
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
            const { motorcycles, total } = await queryMotorcycle(queryParams);
            setMotorcycles(motorcycles);
            setTotalPages(Math.ceil(total / itemsPerPage))
          } catch (error) {
            console.error('Failed to fetch motorcycles:', error);
          } finally {
            setLoading(false);
          }
        }
    
        fetchMotorcycles();
    }, [queryParams])

    useEffect(() => {
      if (motorcycles.length) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedData = motorcycles.slice(startIndex, startIndex + itemsPerPage);
        setPaginatedMotorcycles(paginatedData)
      }
    }, [currentPage, itemsPerPage, motorcycles])

    return {
      motorcycles,
      paginatedMotorcycles,
      loading,
      sortOptions,
      brandOptions,
      selectedSort,
      selectedBrand,
      useMotorcycles,
      onSortOptionChange,
      onBrandOptionChange,
      currentPage,
      totalPages,
      setCurrentPage
    }
}