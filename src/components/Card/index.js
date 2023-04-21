import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  ${({ css }) =>
    `
       ${css}
    `};
`;

export default function Card({ children, css }) {
  return <StyledCard css={css}>{children}</StyledCard>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
