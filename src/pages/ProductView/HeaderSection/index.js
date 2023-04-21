import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "components/Text";
import { Flex } from "components/Layout";
import StyledButton from "components/Button";
import Breadcrumb from "components/Breadcrumb";
import { PRODUCT_EDIT_ROUTE } from "App/routes";

const HeaderWrapper = styled.div`
  margin: 10px 0px;

  a {
    text-decoration: none;
  }
`;

export default function HeaderSection() {
  return (
    <HeaderWrapper>
      <Flex alignItems="center" justifyContent="space-between">
        <Breadcrumb />
        <StyledButton onClick={() => console.log("CLICED")} variant="primary">
          <Link to={PRODUCT_EDIT_ROUTE}>
            <Text color="#fff">Edit</Text>
          </Link>
        </StyledButton>
      </Flex>
    </HeaderWrapper>
  );
}
