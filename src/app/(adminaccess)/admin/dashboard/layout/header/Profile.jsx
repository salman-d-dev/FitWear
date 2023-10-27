var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Menu, Avatar, Typography, Divider, Button, IconButton, ListItemButton, List, ListItemText, } from "@mui/material";
import { IconChevronDown, IconCreditCard, IconCurrencyDollar, IconShield, } from "@tabler/icons-react";
var Profile = function () {
    var _a = useState(null), anchorEl2 = _a[0], setAnchorEl2 = _a[1];
    var handleClick2 = function (event) {
        setAnchorEl2(event.currentTarget);
    };
    var handleClose2 = function () {
        setAnchorEl2(null);
    };
    var theme = useTheme();
    var primary = theme.palette.primary.main;
    var primarylight = theme.palette.primary.light;
    var error = theme.palette.error.main;
    var errorlight = theme.palette.error.light;
    var success = theme.palette.success.main;
    var successlight = theme.palette.success.light;
    /*profile data*/
    var profiledata = [
        {
            href: "/",
            title: "My Profile",
            subtitle: "Account Settings",
            icon: <IconCurrencyDollar width="20" height="20"/>,
            color: primary,
            lightcolor: primarylight,
        },
        {
            href: "/",
            title: "My Inbox",
            subtitle: "Messages & Emails",
            icon: <IconShield width="20" height="20"/>,
            color: success,
            lightcolor: successlight,
        },
        {
            href: "/",
            title: "My Tasks",
            subtitle: "To-do and Daily Tasks",
            icon: <IconCreditCard width="20" height="20"/>,
            color: error,
            lightcolor: errorlight,
        },
    ];
    return (<Box>
      <IconButton size="large" aria-label="menu" color="inherit" aria-controls="msgs-menu" aria-haspopup="true" sx={__assign({}, (typeof anchorEl2 === "object" && {
            borderRadius: "9px",
        }))} onClick={handleClick2}>
        <Avatar src={"/images/users/user2.jpg"} alt={"ProfileImg"} sx={{
            width: 30,
            height: 30,
        }}/>
        <Box sx={{
            display: {
                xs: "none",
                sm: "flex",
            },
            alignItems: "center",
        }}>
          <Typography color="textSecondary" variant="h5" fontWeight="400" sx={{ ml: 1 }}>
            Hi,
          </Typography>
          <Typography variant="h5" fontWeight="700" sx={{
            ml: 1,
        }}>
            Julia
          </Typography>
          <IconChevronDown width="20" height="20"/>
        </Box>
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu id="msgs-menu" anchorEl={anchorEl2} keepMounted open={Boolean(anchorEl2)} onClose={handleClose2} anchorOrigin={{ horizontal: "right", vertical: "bottom" }} transformOrigin={{ horizontal: "right", vertical: "top" }} sx={{
            "& .MuiMenu-paper": {
                width: "360px",
                p: 2,
                pb: 2,
                pt: 0
            },
        }}>

        <Box pt={0}>

          <List>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Edit Profile"/>
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Account"/>
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Change Password"/>
            </ListItemButton>
            <ListItemButton component="a" href="#">
              <ListItemText primary="My Settings"/>
            </ListItemButton>
          </List>

        </Box>
        <Divider />
        <Box mt={2}>
          <Button fullWidth variant="contained" color="primary">
            Logout
          </Button>
        </Box>

      </Menu>
    </Box>);
};
export default Profile;
