// Inline rather than Font Awesome: these two arrows were the only reason the
// 216KB fontawesome.css was pulled into the global bundle.
const Arrow = ({ dir }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={dir === "left" ? "M19 12H5M11 6l-6 6 6 6" : "M5 12h14M13 6l6 6-6 6"} />
  </svg>
);

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const buttonsToShow = 3
  const getVisiblePages = () => {
    let pages = [];
    if (totalPages <= buttonsToShow) {
      // If total pages are less than or equal to 3, show all
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage === 1) {
        // Show the first three pages
        pages = [1, 2, 3];
      } else if (currentPage === totalPages) {
        // Show the last three pages
        pages = [totalPages - 2, totalPages - 1, totalPages];
      } else {
        // Show one page before and after the current page
        pages = [currentPage - 1, currentPage, currentPage + 1];
      }
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <ul className="page_navigation">
      <li
        role="button"
        className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        <span className="page-link">
          <Arrow dir="left" />
        </span>
      </li>

      {visiblePages.map((page) => (
        <li
          role="button"
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          onClick={() => setCurrentPage(page)}
        >
          <span className="page-link">{page}</span>
        </li>
      ))}

      <li
        role="button"
        className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
      >
        <span className="page-link">
          <Arrow dir="right" />
        </span>
      </li>
    </ul>
  );
};

export default Pagination;
