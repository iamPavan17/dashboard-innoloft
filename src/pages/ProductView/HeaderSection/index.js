import styled from "styled-components";

import { Flex } from "components/Layout";
import StyledButton from "components/Button";
import Breadcrumb from "components/Breadcrumb";

const HeaderWrapper = styled.div`
  margin: 10px 0px;
`;

export default function HeaderSection() {
  return (
    <HeaderWrapper>
      <Flex alignItems="center" justifyContent="space-between">
        <Breadcrumb />
        <StyledButton onClick={() => console.log("CLICED")} variant="primary">
          Edit
        </StyledButton>
      </Flex>
    </HeaderWrapper>
  );
}
