import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "components/Text";
import { Flex } from "components/Layout";
import StyledButton from "components/Button";
import Breadcrumb from "components/Breadcrumb";
import { PRODUCT_EDIT_ROUTE, PRODUCT_VIEW_ROUTE } from "App/routes";

const HeaderWrapper = styled.div`
  margin: 10px 0px;

  a {
    text-decoration: none;
  }
`;

export default function HeaderSection({ isEditPage }) {
  const btnText = isEditPage ? "View" : "Edit";
  const btnLink = isEditPage ? PRODUCT_VIEW_ROUTE : PRODUCT_EDIT_ROUTE;
  return (
    <HeaderWrapper>
      <Flex alignItems="center" justifyContent="space-between">
        {isEditPage ? (
          <Text fontSize={"title"} fontWeight={"bold"} color={"primary"}>
            Offer title
          </Text>
        ) : (
          <Breadcrumb />
        )}
        <StyledButton onClick={() => console.log("CLICED")} variant="primary">
          <Link to={btnLink}>
            <Text color="#fff">{btnText}</Text>
          </Link>
        </StyledButton>
      </Flex>
    </HeaderWrapper>
  );
}
