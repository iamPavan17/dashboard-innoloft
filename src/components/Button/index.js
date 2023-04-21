import styled from "styled-components";

const StyledButton = styled.button`
  ${({ theme, variant }) => `
    padding: 8px;
    background: ${theme.text.color[variant]};
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  `}
`;

export default function Button({ children, variant, ...rest }) {
  return (
    <StyledButton variant={variant} {...rest}>
      {children || "-"}
    </StyledButton>
  );
}