import React, { useState } from "react";
import { IconButton, Input, Box, Drawer } from "@mui/material";
import { IconSearch, IconX } from "@tabler/icons-react";
var Search = function () {
    // drawer top
    var _a = useState(false), showDrawer2 = _a[0], setShowDrawer2 = _a[1];
    var handleDrawerClose2 = function () {
        setShowDrawer2(false);
    };
    return (<>
      <IconButton aria-label="show 4 new mails" color="inherit" aria-controls="search-menu" aria-haspopup="true" onClick={function () { return setShowDrawer2(true); }} size="large">
        <IconSearch height="20" width="20" strokeWidth="1.5"/>
      </IconButton>
      <Drawer anchor="top" open={showDrawer2} onClose={function () { return setShowDrawer2(false); }} sx={{
            "& .MuiDrawer-paper": {
                padding: "15px 30px",
            },
        }}>
        <Box display="flex" alignItems="center">
          <Input placeholder="Search here" aria-label="description" fullWidth/>
          <Box sx={{
            ml: "auto",
        }}>
            <IconButton 
    // color="inherit"
    // sx={{
    //   color: (theme) => theme.palette.grey.A200,
    // }}
    onClick={handleDrawerClose2}>
              <IconX height="20" width="20"/>
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>);
};
export default Search;
