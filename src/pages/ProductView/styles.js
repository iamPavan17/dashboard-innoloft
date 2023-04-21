import styled from "styled-components";

const ProductDetailWrapper = styled.div`
  .product-name {
    margin: 20px 20px 10px 20px;
  }

  .product-desc {
    margin: 0px 20px;
  }
`;

const CompanyWrapper = styled.div`
  border-left: 1px solid #e5e7eb;
  padding: 20px;

  .company-title {
    margin-bottom: 12px;
  }

  .user-info {
    margin-bottom: 18px;
  }
`;

export { ProductDetailWrapper, CompanyWrapper };
