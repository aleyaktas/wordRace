import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextInput = ({ iconName, placeHolder, placeHolderColor, iconSize }) => {
  const Icon = require('../../../assets/icons/Icons')[iconName]
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
    '& .MuiInputLabel-root': {
      color:{placeHolderColor},
    },
  });
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
      {iconName && <Icon size={iconSize} iconName={iconName} />}
      <CssTextField label={placeHolder} id="custom-css-outlined-input" variant='standard'/>
    </Box>
  );
}

export default TextInput