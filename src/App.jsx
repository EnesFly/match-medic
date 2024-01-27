import React from 'react';
import DataGridDemo from './components/DataGridDemo';
import Appbar from './layout/Appbar'
import Card from './components/Card';
import Checkbox from './components/CheckBox'
import { Button } from '@mui/material';
import ButtonComponent from './components/Button';
const App = () => {
  
  return (
    <>
      <Appbar/>
      {/* <DataGridDemo /> */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column',margin:'20px' }}>
          <Card/>
          <Checkbox/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',margin:'20px' }}>
          <Card/>
          <Checkbox/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',margin:'20px' }}>
          <Card/>
          <Checkbox/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',margin:'20px' }}>
          <Card/>
          <Checkbox/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',margin:'20px' }}>
          <Card/>
          <Checkbox/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',margin:'20px' }}>
          <Card/>
          <Checkbox/>
        </div>
      </div>
      <ButtonComponent/>
    </>
  )
}

export default App;