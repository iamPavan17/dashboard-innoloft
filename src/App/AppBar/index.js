import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  IconButton,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
} from "@mui/material";
import { useSelector } from "react-redux";

import Text from "components/Text";
import LogoIcon from "./assets/logo.svg";
import {
  LargeScreenLogo,
  SmallScreenLogo,
  HeaderWrapper,
  StyledAppBar,
  StyledLink,
} from "./styles";

const pages = [
  { id: 1, urlPath: "/", label: "Main" },
  { id: 2, urlPath: "/product/view", label: "Product" },
];
const settings = ["Profile"];

function AppBar() {
  const user = useSelector(({ productData: { data } }) => data.user);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let fullName, userImg;
  if (user) {
    fullName = `${user.firstName} ${user.lastName}`;
    userImg = user.profilePicture;
  }

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <HeaderWrapper disableGutters>
          <LargeScreenLogo src={LogoIcon} alt="large logo img" width="140px" />

          {/* Small screen menu - START */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <StyledLink to={page.urlPath}>
                    <Text>{page.label}</Text>
                  </StyledLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Small screen menu - END */}

          <SmallScreenLogo src={LogoIcon} alt="large logo img" width="140px" />

          {/* Large screen menu options - START */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <StyledLink to={page.urlPath} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                  }}
                >
                  <Text fontSize="body">{page.label}</Text>
                </Button>
              </StyledLink>
            ))}
          </Box>
          {/* Large screen menu options - END */}

          {/* User profile options - START */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={fullName} src={userImg} />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Text>{setting}</Text>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* User profile options - END */}
        </HeaderWrapper>
      </Container>
    </StyledAppBar>
  );
}
export default AppBar;
