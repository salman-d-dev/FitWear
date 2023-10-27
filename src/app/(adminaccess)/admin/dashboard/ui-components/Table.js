'use client';
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
import { Grid, Paper } from "@mui/material";
import { createTheme, styled } from '@mui/material/styles';
var Item = styled(Paper)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, theme.typography.body1), { textAlign: 'center', color: theme.palette.text.secondary, height: 60, lineHeight: '60px' }));
});
var darkTheme = createTheme({ palette: { mode: 'dark' } });
var lightTheme = createTheme({ palette: { mode: 'light' } });
import ProductPerfomance from "@/app/(adminaccess)/admin/dashboard/components/dashboard/ProductPerformance";
var Table = function ({title}) {
    return (<Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ProductPerfomance title={title}/>
      </Grid>
    </Grid>);
};
export default Table;
