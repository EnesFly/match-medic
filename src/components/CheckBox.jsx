import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    
      <div style={{ justifyContent:'center'}} >
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        
      </div>
    
  );
}