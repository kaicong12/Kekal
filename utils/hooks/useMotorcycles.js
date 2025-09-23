import { useState, useEffect, useCallback, useMemo } from "react";
import { queryMotorcycle, fetchUniqueBrandSet } from "@/utils/db";
import Fuse from "fuse.js";

export const useMotorcycles = (makeFilter, priceFilter, initialSearchTerm) => {
  const [motorcycles, setMotorcycles] = useState([]);
  const [paginatedMotorcycles, setPaginatedMotorcycles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSort, setSelectedSort] = useState("Price: lowest first");
  const [selectedBrand, setSelectedBrand] = useState(makeFilter);
  const [brandOptions, setBrandOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || "");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 10;
  const sortOptions = [
    { value: "Price: highest first", label: "Price: highest first" },
    { value: "Price: lowest first", label: "Price: lowest first" },
  ];

  useEffect(() => {
    const fetchBrands = async () => {
      const uniqueBrandSet = await fetchUniqueBrandSet();

      // Transform to react-select options format
      const brandOptionsArray = Array.from(uniqueBrandSet).map(
        (brand, index) => ({
          value: index,
          label: brand,
        })
      );

      setBrandOptions(brandOptionsArray);
    };

    fetchBrands();
  }, []);

  const onSortOptionChange = useCallback((selectedOption) => {
    if (selectedOption?.value) {
      setSelectedSort(selectedOption.value);
    }
  }, []);

  const onBrandOptionChange = useCallback((selectedOption) => {
    if (selectedOption?.label) {
      setSelectedBrand(selectedOption.label);
    } else {
      // Handle "All Brands" selection or clearing
      setSelectedBrand(null);
    }
  }, []);

  const onSearchChange = useCallback((newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1); // Reset to first page when searching
  }, []);

  const queryParams = useMemo(() => {
    const filterParams = {
      sortedBy: [],
      filterOpt: [],
    };

    if (selectedSort === "Price: highest first") {
      filterParams.sortedBy = [{ fieldToSort: "price", sortOrder: "desc" }];
    } else {
      filterParams.sortedBy = [{ fieldToSort: "price" }];
    }

    if (selectedBrand?.length) {
      filterParams.filterOpt.push({
        fieldToFilter: "brand",
        operator: "==",
        filterValue: selectedBrand,
      });
    }

    // Handle price filter
    if (priceFilter && priceFilter !== 0) {
      let maxPrice;
      switch (priceFilter) {
        case 2:
          maxPrice = 5000;
          break;
        case 3:
          maxPrice = 10000;
          break;
        case 4:
          maxPrice = 15000;
          break;
        default:
          maxPrice = null;
      }

      if (maxPrice) {
        filterParams.filterOpt.push({
          fieldToFilter: "price",
          operator: "<=",
          filterValue: maxPrice,
        });
      }
    }

    return filterParams;
  }, [selectedBrand, selectedSort, priceFilter]);

  const fuseOptions = {
    keys: [
      { name: "brand", weight: 0.3 },
      { name: "model", weight: 0.3 },
      { name: "year", weight: 0.2 },
      { name: "engineCapacity", weight: 0.1 },
      { name: "color", weight: 0.1 },
    ],
    threshold: 0.4, // Lower threshold = more strict matching
    includeScore: true,
    minMatchCharLength: 2,
  };

  useEffect(() => {
    const fetchMotorcycles = async () => {
      setLoading(true);
      try {
        const { motorcycles: rawMotorcycles, total } = await queryMotorcycle(
          queryParams
        );

        let filteredMotorcycles = rawMotorcycles;

        // Apply fuzzy search if search term exists
        if (searchTerm?.trim()) {
          const fuse = new Fuse(rawMotorcycles, fuseOptions);
          const searchResults = fuse.search(searchTerm.trim());
          filteredMotorcycles = searchResults.map((result) => result.item);
          console.log({ rawMotorcycles, searchResults, filteredMotorcycles });
        }

        setMotorcycles(filteredMotorcycles);
        setTotalPages(Math.ceil(filteredMotorcycles.length / itemsPerPage));
      } catch (error) {
        console.error("Failed to fetch motorcycles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMotorcycles();
  }, [queryParams, searchTerm]);

  useEffect(() => {
    if (motorcycles.length) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginatedData = motorcycles.slice(
        startIndex,
        startIndex + itemsPerPage
      );
      setPaginatedMotorcycles(paginatedData);
    } else {
      setPaginatedMotorcycles([]);
    }
  }, [currentPage, itemsPerPage, motorcycles]);

  return {
    motorcycles,
    paginatedMotorcycles,
    loading,
    sortOptions,
    brandOptions,
    selectedSort,
    selectedBrand,
    searchTerm,
    onSortOptionChange,
    onBrandOptionChange,
    onSearchChange,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};
