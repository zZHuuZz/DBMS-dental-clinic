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
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PaymentIcon from "@mui/icons-material/Payment";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

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
      to: "/patient/detail",
    },
    {
      text: "Đặt lịch hẹn",
      icon: <CalendarMonthIcon />,
      to: "/patient/setdate",
    },
    { text: "Nha sĩ", icon: <LocalHospitalIcon />, to: "/patient/dentist" },
    { text: "Hồ sơ bệnh án", icon: <BookIcon />, to: "/patient/profile" },
    { text: "Thanh toán", icon: <PaymentIcon />, to: "/patient/payment" },
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
          <ListItem key={item.text} disablePadding style={{ color: "white" }}>
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
    <div style={{ 
      backgroundColor: "#84a1b4",
      color: "#ffffff",
      padding: "10px",
      display: "flex",
      alignItems: "center",
    }}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div >
          <Button
            onClick={toggleDrawer(anchor, true)}
            startIcon={<MenuIcon style={{ fontSize: 50, color: "#04364a" }} />}
          ></Button>
          </div>
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
