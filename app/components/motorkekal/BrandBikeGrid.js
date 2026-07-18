"use client";
import { useRef, useState } from "react";
import BikeCard from "./BikeCard";
import Pagination from "@/app/components/common/Pagination";

// Same page size as the main listing (utils/hooks/useMotorcyclesPg.js).
const ITEMS_PER_PAGE = 8;

// Client-side paginated grid for brand pages. The full brand inventory is
// fetched server-side for SEO; we only paginate the rendering.
const BrandBikeGrid = ({ motorcycles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef(null);

  const totalPages = Math.ceil(motorcycles.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const visible = motorcycles.slice(start, start + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={gridRef} style={{ scrollMarginTop: 90 }}>
      <div className="bike-grid">
        {visible.map((moto) => (
          <BikeCard key={moto.id} motorcycle={moto} />
        ))}
      </div>

      {totalPages > 1 && (
        <div style={{ marginTop: 30 }}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default BrandBikeGrid;
