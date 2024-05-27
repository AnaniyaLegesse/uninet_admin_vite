import './profile.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';


const Profile = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="content">
          <h2>Account</h2>
          <div className="grid">
            <div className="accountInfo">
              <h3>Account Information</h3>
              {/* Account info component content */}
              <p>Name: John Doe</p>
              <p>Email: john.doe@example.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div className="accountDetailForm">
              <h3>Account Details</h3>
              {/* Account detail form component content */}
              <form>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div>
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <button type="submit">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;








// import React from 'react'
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Unstable_Grid2';
// import AccountInfo from './AccountInfo';
// import AccountDetailForm from './AccountDetailForm';

// const Profile = () => {
//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />
//         <Stack spacing={3}>
//       <div>
//         <Typography variant="h4">Account</Typography>
//       </div>
//       <Grid container spacing={3}>
//         <Grid lg={4} md={6} xs={12}>
//           <AccountInfo />
//         </Grid>
//         <Grid lg={8} md={6} xs={12}>
//           <AccountDetailForm />
//         </Grid>
//       </Grid>
//     </Stack>
//       </div>
//     </div>
//   )
// }

// export default Profile