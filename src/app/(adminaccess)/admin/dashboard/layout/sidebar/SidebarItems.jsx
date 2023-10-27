import React from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
var SidebarItems = function (_a) {
    var toggleMobileSidebar = _a.toggleMobileSidebar;
    var pathname = usePathname();
    var pathDirect = pathname;
    return (<Box sx={{ px: 2 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map(function (item) {
            // {/********SubHeader**********/}
            // if (item.subheader) {
            //   return <NavGroup item={item} key={item.subheader} />;
            //   // {/********If Sub Menu**********/}
            //   /* eslint no-else-return: "off" */
            // } else {
            return (<NavItem item={item} key={item.id} pathDirect={pathDirect} onClick={toggleMobileSidebar}/>);
        })}
      </List>
    </Box>);
};
export default SidebarItems;
