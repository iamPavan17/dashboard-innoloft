import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #d1d5db;
`;

export default function Input({ ...rest }) {
  return <StyledInput {...rest} />;
}
