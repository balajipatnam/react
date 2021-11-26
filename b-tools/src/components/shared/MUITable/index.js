import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import MUICard from 'components/shared/MUICard';

import PropTypes from 'prop-types';
import './mui-table.scss';
import { Visibility } from '@mui/icons-material';

function MUITable({ rows, columns, isCustomRow, children }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <MUICard>
        <TableContainer component={Paper} className="mui-table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    key={'column-' + index}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {!isCustomRow && (
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, parentIndex) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={'parent-' + parentIndex}
                      >
                        {columns.map((column, index) => {
                          const value = row[column.id];
                          const random =
                            Math.floor(Math.random() * 1000000) + 1;
                          return (
                            <React.Fragment key={'row-' + random}>
                              {index === 0 && (
                                <TableCell>{parentIndex + 1}</TableCell>
                              )}
                              {index > 0 && column.id !== 'actions' && (
                                <TableCell align={column.align}>
                                  {value}
                                </TableCell>
                              )}
                              {column.id === 'actions' && (
                                <TableCell align={column.align}>
                                  <Visibility className="action-icon" />
                                </TableCell>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            )}
            {isCustomRow && <TableBody>{children}</TableBody>}
          </Table>
        </TableContainer>
      </MUICard>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

MUITable.defaultProps = {
  rows: [],
  columns: [],
  checkboxSelection: false,
};
MUITable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  checkboxSelection: PropTypes.bool,
  isCustomRow: PropTypes.bool,
  children: PropTypes.node,
};
export default MUITable;
