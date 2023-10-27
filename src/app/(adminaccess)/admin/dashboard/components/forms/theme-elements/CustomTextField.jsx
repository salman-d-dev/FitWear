import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
var CustomTextField = styled(function (props) { return <TextField {...props}/>; })(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
            color: theme.palette.text.secondary,
            opacity: '0.8',
        },
        '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
            color: theme.palette.text.secondary,
            opacity: '1',
        },
        '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[200],
        },
    });
});
export default CustomTextField;
