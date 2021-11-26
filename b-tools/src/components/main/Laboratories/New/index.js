import { useEffect, useState } from 'react';
import MUITable from 'components/shared/MUITable';

import * as React from 'react';

export default function NewLaboratories() {
  const [rows, setRows] = useState([]);
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
  return (
    <>
      <MUITable columns={columns} rows={rows} />
    </>
  );
}
