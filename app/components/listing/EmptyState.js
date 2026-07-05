import PropTypes from "prop-types";
import { useTranslations } from "next-intl";

const EmptyState = ({ searchTerm, selectedBrand }) => {
  const t = useTranslations("listing.empty");
  return (
    <div className="empty-state-container">
      <div className="empty-state-content">
        {/* Main Message */}
        <h3 className="empty-state-title">{t("title")}</h3>
        <p className="empty-state-subtitle">{t("subtitle")}</p>

        {/* Search Criteria */}
        <div className="search-criteria">
          {searchTerm && (
            <p className="criteria-item">
              {t("searchedFor")} <strong>&quot;{searchTerm}&quot;</strong>
            </p>
          )}
          {selectedBrand && (
            <p className="criteria-item">
              {t("brand")} <strong>{selectedBrand}</strong>
            </p>
          )}
        </div>

        {/* Suggestions */}
        <div className="suggestions-section">
          <h4 className="suggestions-title">{t("tryThese")}</h4>
          <div className="suggestions-grid">
            <div className="suggestion-item">
              <i
                className="fa fa-filter"
                style={{ marginRight: "8px", color: "#6c757d" }}
              ></i>
              {t("removeFilters")}
            </div>
            <div className="suggestion-item">
              <i
                className="fa fa-search"
                style={{ marginRight: "8px", color: "#6c757d" }}
              ></i>
              {t("differentKeywords")}
            </div>
            <div className="suggestion-item">
              <i
                className="fa fa-spell-check"
                style={{ marginRight: "8px", color: "#6c757d" }}
              ></i>
              {t("checkSpelling")}
            </div>
            <div className="suggestion-item">
              <i
                className="fa fa-list"
                style={{ marginRight: "8px", color: "#6c757d" }}
              ></i>
              {t("browseAll")}
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="help-section">
          <p className="help-text">
            {t("needHelp")}
            <a
              href="https://wa.me/60127126128"
              target="_blank"
              rel="noopener noreferrer"
              className="help-link"
            >
              {" "}
              {t("contactExperts")}
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .empty-state-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
          padding: 40px 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin: 20px 0;
        }

        .empty-state-content {
          text-align: center;
          max-width: 600px;
        }

        .empty-state-icon {
          position: relative;
          margin-bottom: 30px;
        }

        .motorcycle-icon {
          display: inline-block;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .search-icon-overlay {
          position: absolute;
          bottom: 0;
          right: 50%;
          transform: translateX(50%);
          background: #fff;
          border-radius: 50%;
          padding: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .empty-state-title {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
        }

        .empty-state-subtitle {
          font-size: 16px;
          color: #6c757d;
          margin-bottom: 25px;
        }

        .search-criteria {
          margin-bottom: 30px;
        }

        .criteria-item {
          font-size: 14px;
          color: #495057;
          margin-bottom: 5px;
        }

        .suggestions-section {
          margin-bottom: 30px;
        }

        .suggestions-title {
          font-size: 18px;
          font-weight: 500;
          color: #333;
          margin-bottom: 15px;
        }

        .suggestions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }

        .suggestion-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 6px;
          font-size: 14px;
          color: #495057;
          border: 1px solid #e9ecef;
        }

        .action-buttons {
          margin-bottom: 30px;
        }

        .help-section {
          border-top: 1px solid #e9ecef;
          padding-top: 20px;
        }

        .help-text {
          font-size: 14px;
          color: #6c757d;
          margin: 0;
        }

        .help-link {
          color: #007bff;
          text-decoration: none;
          font-weight: 500;
        }

        .help-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .empty-state-container {
            padding: 30px 15px;
          }

          .suggestions-grid {
            grid-template-columns: 1fr;
          }

          .action-buttons {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

EmptyState.propTypes = {
  searchTerm: PropTypes.string,
  selectedBrand: PropTypes.string,
};

export default EmptyState;
