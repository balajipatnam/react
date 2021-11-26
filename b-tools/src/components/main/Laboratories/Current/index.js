import * as React from 'react';

import { useEffect, useState } from 'react';
import MUITable from 'components/shared/MUITable';
import MUIButton from 'components/shared/MUIButton';
import MUIDialog from 'components/shared/MUIDialog';
import MUIInput from 'components/shared/MUIInput';
import MUISelect from 'components/shared/MUISelect';
import TableRow from '@mui/material/TableRow';
import { Drawer, TableCell } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import SeachIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { Grid, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import './current-laboratories.scss';

export default function CurrentLaboratories() {
  const [selectedValue, setValue] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const [rows, setRows] = useState([]);
  const [isOpenCreateDialog, setIsOpenCreateDialog] = useState(false);
  const [columns] = useState([
    {
      label: 'S.No',
    },
    {
      label: 'Laboratories Name',
      id: 'labName',
    },
    {
      label: 'Specification',
      id: 'specification',
    },
    {
      label: 'Location',
      id: 'location',
    },
    {
      label: 'Email	',
      id: 'email',
    },
    {
      label: 'Phone No',
      id: 'phoneNo',
    },
    {
      label: 'Status',
      id: 'status',
    },
    {
      label: 'Action',
      align: 'center',
      id: 'actions',
    },
  ]);
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    const rows = [
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
      {
        labName: 'Laboratory Name01',
        specification: 'Lorem ipsum',
        location: 'Rome',
        email: 'Lorem@ipsum.com',
        phoneNo: '98567452362',
        status: 'Approve',
      },
    ];

    setRows(rows);
  }, []);

  function openDialog() {
    setIsOpenCreateDialog(true);
  }
  function closeDialog() {
    setIsOpenCreateDialog(false);
  }

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
  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <Box component="span" className="list-header">
        <Tabs
          value={tabIndex}
          onChange={changeTab}
          aria-label="basic tabs example"
        >
          <Tab label="Current Lab" />
          <Tab label="New Lab Request" />
        </Tabs>
        <MUIInput
          placeholder="Search Laboratories"
          className="search-input"
          InputAdornment={<SeachIcon />}
        />
        <MUISelect
          placeholder="Matric Category"
          className="search-input"
          value={selectedValue}
          onChange={onChange}
          items={[
            { value: 'asd', label: '1111' },
            { value: 'asd2', label: '11112' },
            { value: 'asd22', label: '111122' },
          ]}
        />
        <MUIButton text="Add New" onClick={openDialog} className="ml-auto" />
      </Box>
      <MUITable columns={columns} rows={rows} />
      <MUITable columns={columns} isCustomRow={true}>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>
            <div className="user-details" onClick={toggleDrawer}>
              <div className="user-avatar">D</div>
              <span className="user-name">Laboratory Name01 </span>
            </div>
          </TableCell>
          <TableCell>1</TableCell>
          <TableCell>1</TableCell>
          <TableCell>
            <div className="status green">Approved</div>
          </TableCell>
        </TableRow>
      </MUITable>

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
            </Grid>
          </ListItem>
        </Box>
      </Drawer>
      {isOpenCreateDialog && (
        <MUIDialog
          open={isOpenCreateDialog}
          onClose={closeDialog}
          title="Add New Laboratories"
          actions={{ saveBtnTxt: 'Save' }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <MUIInput
                label="Company Name"
                placeholder="Enter the company name"
              />
            </Grid>
            <Grid item xs={6}>
              <MUIInput label="Location" placeholder="Enter the location" />
            </Grid>
            <Grid item xs={6}>
              <MUIInput label="Email" placeholder="Enter the email" />
            </Grid>
            <Grid item xs={6}>
              <MUIInput label="Phone No" placeholder="Enter the phone no" />
            </Grid>
            <Grid item xs={6}>
              <MUIInput label="What we do" placeholder="Enter the text" />
            </Grid>
          </Grid>
        </MUIDialog>
      )}
    </>
  );
}
