import React from "react";
// mui imports
import { ListItemIcon, ListItem, List, styled, ListItemText, useTheme, ListItemButton, } from "@mui/material";
import Link from "next/link";
var NavItem = function (_a) {
    var item = _a.item, level = _a.level, pathDirect = _a.pathDirect, onClick = _a.onClick;
    var Icon = item.icon;
    var theme = useTheme();
    var itemIcon = <Icon stroke={1.5} size="1.3rem"/>;
    var ListItemStyled = styled(ListItem)(function () { return ({
        padding: 0,
        ".MuiButtonBase-root": {
            whiteSpace: "nowrap",
            marginBottom: "8px",
            padding: "8px 10px",
            borderRadius: "8px",
            backgroundColor: level > 1 ? "transparent !important" : "inherit",
            color: theme.palette.text.secondary,
            paddingLeft: "10px",
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
            },
            "&.Mui-selected": {
                color: "white",
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                },
            },
        },
    }); });
    return (<List component="div" disablePadding key={item.id}>
      <ListItemStyled>
        <ListItemButton component={Link} href={item.href} disabled={item.disabled} selected={pathDirect === item.href} target={item.external ? "_blank" : ""} onClick={onClick}>
          <ListItemIcon sx={{
            minWidth: "36px",
            p: "3px 0",
            color: "inherit",
        }}>
            {itemIcon}
          </ListItemIcon>
          <ListItemText>
            <>{item.title}</>
          </ListItemText>
        </ListItemButton>
      </ListItemStyled>
    </List>);
};
export default NavItem;
