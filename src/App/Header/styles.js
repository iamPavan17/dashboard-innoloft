import styled from "styled-components";
import AppBar from "@mui/material/AppBar";

const LargeScreenLogo = styled.img`
  margin-right: 18px;
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
  background-color: #272e71 !important;
`;

export { LargeScreenLogo, SmallScreenLogo, HeaderWrapper, StyledAppBar };
