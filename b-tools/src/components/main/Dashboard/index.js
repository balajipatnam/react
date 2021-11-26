import { useEffect, useState } from 'react';
import MUITable from 'components/shared/MUITable';

import * as React from 'react';

export default function Dashboard() {
  const [rows, setRows] = useState([]);
  const [columns] = useState([
    {
      label: 'S.No',
    },
    {
      label: 'Name',
      id: 'name',
    },
    {
      label: 'Company Name',
      id: 'calories',
    },
    {
      label: 'Email',
      id: 'name',
    },
    {
      label: 'Password',
      id: 'calories',
    },
    {
      label: 'Phone',
      id: 'name',
    },
    {
      label: 'Location',
      id: 'calories',
    },
    {
      label: 'Action',
      align: 'center',
      id: 'actions',
    },
  ]);
  useEffect(() => {
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    setRows(rows);
  }, []);
  return (
    <>
      <MUITable columns={columns} rows={rows} />
    </>
  );
}
