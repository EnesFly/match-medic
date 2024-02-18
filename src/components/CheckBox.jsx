import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({
  checkedIcon,
  unCheckedIcon,
  label
}) {
  return (
    
      <div style={{ justifyContent:'center'}} >
        <FormControlLabel 
        control={
        <Checkbox
          icon={unCheckedIcon}
          checkedIcon={checkedIcon}
        />}
        label={label} />
      </div>
    
  );
}