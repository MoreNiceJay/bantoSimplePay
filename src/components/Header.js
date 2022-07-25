import React from "react";

import { Grid, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { isMobile } from "react-device-detect";
import { useHistory } from "react-router-dom";

import CustomCenterBox from "./CustomCenterBox";
import CustomLeftBox from "./CustomLeftBox";
import { Box } from "@mui/system";

import bantoLogo from "../assets/img/banto_logo.png";

function Header({ title }) {
  const history = useHistory();

  const pages = [
    { title: "HOME", path: "/" },
    { title: "ABOUT US", path: "/about" },
    { title: "PROJECTS", path: "/project" },
    { title: "BANTO PARTNERS", path: "/partners" },
    { title: "CONTACTS", path: "/contact" },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      height={150}
    >
      <Grid item xs={4} lg={4}>
        <CustomLeftBox>
          <Typography
            fontSize={{
              lg: 40,
              xs: 25,
            }}
            fontWeight={700}
          >
            BANTO
          </Typography>
          {/* <img src={bantoLogo} alt="" width="50%" /> */}
        </CustomLeftBox>
      </Grid>
      <Grid item xs={8} lg={8}>
        <CustomCenterBox>
          {isMobile ? (
            <Box sx={{ textAlign: "right" }}>
              <MenuIcon
                id="menu-button"
                aria-controls={open ? "menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "menu-button",
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    onClick={() => {
                      history.push(page.path);
                    }}
                  >
                    {page.title}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Stack direction="row" spacing={5}>
              {pages.map((page) =>
                title == page.title ? (
                  <CustomCenterBox
                    component="a"
                    href={page.path}
                    sx={{
                      borderTop: "1px solid #333333",
                      borderBottom: "1px solid #333333",
                      color: "black",
                    }}
                  >
                    <Typography
                      fontSize={{
                        lg: 15,
                        xs: 10,
                      }}
                    >
                      {page.title}
                    </Typography>
                  </CustomCenterBox>
                ) : (
                  <CustomCenterBox
                    component="a"
                    href={page.path}
                    sx={{
                      color: "black",
                    }}
                  >
                    <Typography
                      fontSize={{
                        lg: 15,
                        xs: 10,
                      }}
                    >
                      {page.title}
                    </Typography>
                  </CustomCenterBox>
                )
              )}
            </Stack>
          )}
        </CustomCenterBox>
      </Grid>
    </Grid>
  );
}

export default Header;
