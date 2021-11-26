import React, { useEffect, useState } from 'react';

import MUIButton from 'components/shared/MUIButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MUIInput from 'components/shared/MUIInput';
import MUISelect from 'components/shared/MUISelect';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import './notifications.scss';

export default function Notification() {
  const [tabIndex, setTabIndex] = useState(0);
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {}, []);

  function changeTab(event, newValue) {
    setTabIndex(newValue);
  }

  function toggleDrawer(event) {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenSideBar((openSideBar) => !openSideBar);
  }
  return (
    <section className="notifications">
      <Box component="span" className="list-header">
        <Tabs
          value={tabIndex}
          onChange={changeTab}
          aria-label="basic tabs example"
        >
          <Tab label="Received" />
          <Tab label="Sent" />
        </Tabs>
        <MUIButton
          text="Send Notifications"
          className="ml-auto"
          onClick={toggleDrawer}
        />
      </Box>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        className="notifications-list"
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Elijah"
            className="item-body"
            secondary={
              <React.Fragment>
                <Typography
                  component="div"
                  variant="body2"
                  color="text.primary"
                >
                  elijah@gmail.com
                </Typography>

                <Typography
                  component="div"
                  variant="body3"
                  color="text.primary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </Typography>
              </React.Fragment>
            }
          />

          <div edge="end" className="actions">
            <p className="day">Today</p>
            <p className="time">12 : 00 AM</p>
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Elijah"
            className="item-body"
            secondary={
              <React.Fragment>
                <Typography
                  component="div"
                  variant="body2"
                  color="text.primary"
                >
                  elijah@gmail.com
                </Typography>

                <Typography
                  component="div"
                  variant="body3"
                  color="text.primary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </Typography>
              </React.Fragment>
            }
          />

          <div edge="end" className="actions">
            <p className="day">Today</p>
            <p className="time">12 : 00 AM</p>
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Elijah"
            className="item-body"
            secondary={
              <React.Fragment>
                <Typography
                  component="div"
                  variant="body2"
                  color="text.primary"
                >
                  elijah@gmail.com
                </Typography>

                <Typography
                  component="div"
                  variant="body3"
                  color="text.primary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </Typography>
              </React.Fragment>
            }
          />

          <div edge="end" className="actions">
            <p className="day">Today</p>
            <p className="time">12 : 00 AM</p>
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Elijah"
            className="item-body"
            secondary={
              <React.Fragment>
                <Typography
                  component="div"
                  variant="body2"
                  color="text.primary"
                >
                  elijah@gmail.com
                </Typography>

                <Typography
                  component="div"
                  variant="body3"
                  color="text.primary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </Typography>
              </React.Fragment>
            }
          />

          <div edge="end" className="actions">
            <p className="day">Today</p>
            <p className="time">12 : 00 AM</p>
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Elijah"
            className="item-body"
            secondary={
              <React.Fragment>
                <Typography
                  component="div"
                  variant="body2"
                  color="text.primary"
                >
                  elijah@gmail.com
                </Typography>

                <Typography
                  component="div"
                  variant="body3"
                  color="text.primary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </Typography>
              </React.Fragment>
            }
          />

          <div edge="end" className="actions">
            <p className="day">Today</p>
            <p className="time">12 : 00 AM</p>
          </div>
        </ListItem>
      </List>
      <Drawer anchor={'right'} open={openSideBar} onClose={toggleDrawer}>
        <Box sx={{ width: 320 }} role="presentation">
          <List className="rightbar">
            <div className="rightbar-header">
              <h3>Notifications</h3>
              <CloseIcon onClick={toggleDrawer} />
            </div>
          </List>
          <Divider />
          <ListItem>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <MUIInput
                  label="Notification Text"
                  placeholder="Enter the text"
                  multiline
                  rows={6}
                />
              </Grid>
              <Grid item xs={12}>
                <MUISelect
                  label="Choose the location"
                  placeholder="Select All"
                  className="search-input"
                  items={[]}
                />
              </Grid>
              <Grid item xs={12}>
                <MUISelect
                  label="Admin"
                  placeholder="Select Caregivers"
                  className="search-input"
                  items={[]}
                />
              </Grid>
              <Grid item xs={6}>
                <MUIButton text="Edit" variant="contained" color="secondary" />
              </Grid>
              <Grid item xs={6}>
                <MUIButton text="Send" />
              </Grid>
            </Grid>
          </ListItem>
        </Box>
      </Drawer>
    </section>
  );
}
