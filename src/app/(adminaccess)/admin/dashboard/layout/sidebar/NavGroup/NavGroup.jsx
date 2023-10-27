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
import PropTypes from 'prop-types';
// mui imports
import { ListSubheader, styled } from '@mui/material';
var NavGroup = function (_a) {
    var item = _a.item;
    var ListSubheaderStyle = styled(function (props) { return <ListSubheader disableSticky {...props}/>; })(function (_a) {
        var theme = _a.theme;
        return (__assign(__assign({}, theme.typography.overline), { fontWeight: '700', marginTop: theme.spacing(3), marginBottom: theme.spacing(0), color: theme.palette.text.primary, lineHeight: '26px', padding: '3px 12px' }));
    });
    return (<ListSubheaderStyle>{item.subheader}</ListSubheaderStyle>);
};
NavGroup.propTypes = {
    item: PropTypes.object,
};
export default NavGroup;
