import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import logo from 'assets/images/dash-logo.png';
import './sidebar.scss';
import Menus from 'utils/menus';
import { Link } from 'react-router-dom';

const drawerWidth = 80;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', my: 7 }} className="sidebar">
        <img src={logo} width="40" />
        <List>
          {Menus.map((menu) => (
            <Link to={menu.path} key={menu.label}>
              <ListItem button className="sidebar-item">
                <ListItemIcon>
                  <menu.icon />
                </ListItemIcon>
                {/* <ListItemText primary={text} /> */}
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
