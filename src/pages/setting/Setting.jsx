import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Notification from './Notification';
import UpdatePasswordForm from './UpdatePasswordForm';

const Setting = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <Stack spacing={3}>
          <h1>setting</h1>
      
   
    </Stack>
      </div>
    </div>
  )
}

export default Setting