import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";

// styled is function containing object... let stored this in StyledApp var

const StyledApp = styled(AppBar)`
  background: #fff;
  height: 70px;
`;

const MenuIcon = styled(Menu)`
  color: #000;
`;

const Image = styled("img")({
  height: 55,
  margin: "auto",
  paddingRight: 70,
});

const Header = () => {
  // const classes=useStyles();           //to import css in above useStyle/makeStyle
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  return (
    <>
      <StyledApp>
        <Toolbar>
          <MenuIcon />
          <Image src={url} alt="logo" />
        </Toolbar>
      </StyledApp>
    </>
  );
};

export default Header;
