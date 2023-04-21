import styled from "styled-components";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";

const LargeScreenLogo = styled.img`
  margin-right: 24px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const SmallScreenLogo = styled.img`
  @media (min-width: 900px) {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  min-height: 64px;
  align-items: center;
  justify-content: space-between;
`;

const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.text.color.primary} !important;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export {
  LargeScreenLogo,
  SmallScreenLogo,
  HeaderWrapper,
  StyledAppBar,
  StyledLink,
};
