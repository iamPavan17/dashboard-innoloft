import styled from "styled-components";

const Section = styled.section`
  max-width: 120rem;
  margin: 0px auto;
  padding: 14px 24px;

  .product-detail-wrapper {
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }

  // WYSIWYG editor styles
  .wrapperClassName {
    font-size: 14px;
    border: 1px solid #d1d5db;
  }
`;

const Divider = styled.div`
  padding: 10px 0px;
`;

// const spacing = css`
//   padding-top: 7.4rem;
//   padding-bottom: 4.4rem;
// `;

export { Section, Divider };
