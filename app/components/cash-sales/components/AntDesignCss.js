const antDesignCSS = `
    body {
        padding: 24px
    }
    .ant-card-body {
        padding: 24px;
    }

    .ant-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ant-row-end {
        justify-content: flex-end;
    }

    .ant-descriptions-item-container {
        display: flex;
        gap: 8px;
        justify-content: flex-end
    }

    .ant-space {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .ant-card {
        background: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 8px;
        margin-bottom: 16px;
    }

    .ant-card-head {
        background: #fafafa;
        border-bottom: 1px solid #d9d9d9;
        padding: 16px 24px;
        min-height: 56px;
    }

    .ant-col {
        position: relative;
        max-width: 100%;
        min-height: 1px;
        flex: 0 0 50%;
    }

    .ant-space {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .ant-typography {
        color: rgba(0, 0, 0, 0.88);
        margin-bottom: 0;
    }

    .ant-typography-title {
        font-weight: 600;
        margin-bottom: 0.5em;
    }

    .ant-table {
        width: 100%;
        border-collapse: collapse;
    }

    .ant-table-thead > tr > th {
        background: #fafafa;
        border: 1px solid #d9d9d9;
        padding: 16px;
        text-align: left;
        font-weight: 600;
    }

    .ant-table-tbody > tr > td {
        border: 1px solid #d9d9d9;
        padding: 16px;
    }

    .ant-tag {
        display: inline-block;
        padding: 0 8px;
        font-size: 12px;
        line-height: 20px;
        border-radius: 6px;
        border: 1px solid #d9d9d9;
    }

    .ant-tag-gold {
        background: #fadb14;
        border-color: #faad14;
        color: rgba(0, 0, 0, 0.88);
    }

    .ant-tag-success {
        background: #f6ffed;
        border-color: #b7eb8f;
        color: #389e0d;
    }

    .ant-divider {
        margin: 16px 0;
        border-top: 1px solid #d9d9d9;
    }

    .ant-descriptions-item-label {
        font-weight: 600;
    }

    table {
        width: 100%;
        text-align: start;
        border-radius: 8px 8px 0 0;
    }

    @media print {
        .receipt-actions { display: none !important; }
        body { margin: 0; }
        .ant-table-thead > tr > th,
        .ant-table-tbody > tr > td {
            border: 1px solid #d9d9d9 !important;
        }

        .ant-card {
            background: #fff;
            border: 1px solid #d9d9d9;
            border-radius: 8px;
            margin-bottom: 16px;
        }
    }
`;

module.exports = { antDesignCSS };
