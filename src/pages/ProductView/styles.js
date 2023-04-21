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

const VideoWrapper = styled.div`
  margin-top: 20px;
  align-self: center;
`;

const VideoSection = styled.div`
  padding: 20px;
`;

const OtherInfoSection = styled.div`
  padding: 20px;

  .chip {
    font-size: 14px;
  }

  .other-info-wrapper {
    margin-top: 20px;
  }
`;

export {
  ProductDetailWrapper,
  CompanyWrapper,
  VideoWrapper,
  VideoSection,
  OtherInfoSection,
};
