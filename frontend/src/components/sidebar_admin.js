import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MenuIcon from "@mui/icons-material/Menu";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const links = [
    {
      text: "Thông tin cá nhân",
      icon: <AccountCircleIcon />,
      to: "/admin/detail",
    },
    { text: "Dashboard", icon: <DashboardIcon />, to: "/admin/dashboard" },
    {
      text: "Quản lý tài khoản",
      icon: <SupervisorAccountIcon />,
      to: "/admin/account",
    },
    { text: "Danh mục thuốc", icon: <VaccinesIcon />, to: "/admin/storemed" },
    { text: "Thông tin khám", icon: <InfoIcon />, to: "/admin/infoappo" },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((item, index) => (
          <ListItem key={item.text} disablePadding style={{ color: " white" }}>
            <ListItemButton component={Link} to={item.to}>
              <ListItemIcon style={{ color: " white" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            startIcon={<MenuIcon style={{ fontSize: 50, color: "#04364a" }} />}
          ></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            PaperProps={{ style: { backgroundColor: "#04364a" } }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
