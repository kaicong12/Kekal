import { useState, useEffect, useCallback, useMemo } from "react";

export const useMotorcyclesPg = (makeFilter, priceFilter, initialSearchTerm) => {
  const [motorcycles, setMotorcycles] = useState([]);
  const [paginatedMotorcycles, setPaginatedMotorcycles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSort, setSelectedSort] = useState("Price: lowest first");
  const [selectedBrand, setSelectedBrand] = useState(makeFilter);
  const [brandOptions, setBrandOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm ?? "");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 10;
  const sortOptions = [
    { value: "Price: highest first", label: "Price: highest first" },
    { value: "Price: lowest first", label: "Price: lowest first" },
  ];

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("/api/motorcycles/brands");
        const data = await res.json();
        const brandOptionsArray = data.brands.map((brand, index) => ({
          value: index,
          label: brand,
        }));
        setBrandOptions(brandOptionsArray);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }
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
      setSelectedBrand(null);
    }
  }, []);

  const onSearchChange = useCallback((newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
  }, []);

  const queryParams = useMemo(() => {
    const params = new URLSearchParams();

    if (selectedSort === "Price: highest first") {
      params.set("sortField", "price");
      params.set("sortOrder", "desc");
    } else {
      params.set("sortField", "price");
      params.set("sortOrder", "asc");
    }

    if (selectedBrand?.length) {
      params.set("brand", selectedBrand);
    }

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
        params.set("maxPrice", maxPrice);
      }
    }

    if (searchTerm?.trim()) {
      params.set("search", searchTerm.trim());
    }

    return params.toString();
  }, [selectedBrand, selectedSort, priceFilter, searchTerm]);

  useEffect(() => {
    const fetchMotorcycles = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/motorcycles?${queryParams}`);
        const data = await res.json();

        setMotorcycles(data.motorcycles);
        setTotalPages(Math.ceil(data.motorcycles.length / itemsPerPage));
      } catch (error) {
        console.error("Failed to fetch motorcycles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMotorcycles();
  }, [queryParams]);

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
