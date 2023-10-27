import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
// components
import Profile from './Profile';
import Search from './Search';
import { IconMenu2 } from '@tabler/icons-react';
var Header = function (_a) {
    // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    var toggleMobileSidebar = _a.toggleMobileSidebar;
    var AppBarStyled = styled(AppBar)(function (_a) {
        var _b;
        var theme = _a.theme;
        return (_b = {
                boxShadow: 'none',
                background: theme.palette.background.paper,
                justifyContent: 'center',
                backdropFilter: 'blur(4px)'
            },
            _b[theme.breakpoints.up('lg')] = {
                minHeight: '70px',
            },
            _b);
    });
    var ToolbarStyled = styled(Toolbar)(function (_a) {
        var theme = _a.theme;
        return ({
            width: '100%',
            color: theme.palette.text.secondary,
        });
    });
    return (<AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton color="inherit" aria-label="menu" onClick={toggleMobileSidebar} sx={{
            display: {
                lg: "none",
                xs: "inline",
            },
        }}>
          <IconMenu2 width="20" height="20"/>
        </IconButton>

        <Search />
         
        <Box flexGrow={1}/>
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>);
};
Header.propTypes = {
    sx: PropTypes.object,
};
export default Header;
