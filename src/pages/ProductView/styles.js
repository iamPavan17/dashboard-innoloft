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

  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoSection = styled.div`
  padding: 20px;
`;

const OtherInfoSection = styled.div`
  padding: 20px;

  .chip {
    font-size: 13px;
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
