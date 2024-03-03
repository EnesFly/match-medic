import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

export default function MMCheckbox({
  checkedIcon,
  unCheckedIcon,
  label,
  onChange
}) {
  return (
    
      <div style={{ justifyContent:'center'}} >
        <FormControlLabel 
        control={
        <Checkbox
          checkedIcon={checkedIcon}
          icon={unCheckedIcon}
          onChange={onChange}
        />}
        label={
          <Typography style={{justifyContent:'center', display:'flex'}}>{label}</Typography>
        } />
      </div>
    
  );
}