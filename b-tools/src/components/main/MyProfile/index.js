import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import ProfileImg from 'assets/images/profile.png';
import './myprofile.scss';

export default function MyProfile() {
  useEffect(() => {}, []);
  return (
    <>
      <Grid container className="profile-left">
        <Grid item xs={3}>
          <Box
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            className="profile-left"
          >
            <Box sx={{ mx: 2 }}>
              <img src={ProfileImg} width="100%" className="profile-left-img" />
              <h4>Balaji</h4>
              <ul>
                <li>
                  <div className="profile-details">
                    <EmailIcon />
                    <span>Company</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </li>
                <li>
                  <div className="profile-details">
                    <LocationIcon />
                    <span>Address</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </li>
                <li>
                  <div className="profile-details">
                    <PhoneIcon />
                    <span>Phone Number</span>
                  </div>
                  <p>9874563210</p>
                </li>
                <li>
                  <div className="profile-details">
                    <EmailIcon />
                    <span>Email</span>
                  </div>
                  <p>Someone@gamil.com</p>
                </li>
              </ul>
            </Box>
            <Divider variant="middle" />
          </Box>
        </Grid>
        <Grid item xs={9} sx={{ pl: 1, mb: 1 }}>
          <Box sx={{ mb: 1, width: '100%', bgcolor: 'background.paper' }}>
            Text
          </Box>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>Text</Box>
        </Grid>
      </Grid>
    </>
  );
}
