import * as React from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";



const AvaterPopover=()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>   
        <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
              onClick={handleClick}
              aria-describedby={id}
            />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box>
           <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem > <ListItemText primary="Ananiya" secondary="ananiya.legesse@gmail.com" /> </ListItem>
                  
                </List>
            </nav>
            <Divider />
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem >
                  <ListItemButton component={Link} to="/">
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton component={Link} to="/profile"> 
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem >
                  <ListItemButton component={Link} to="/login"> 
                    <ListItemText secondary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>     
        </Box>
      </Popover>
    </div>
  );
}

export default AvaterPopover;