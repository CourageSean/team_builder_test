import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { rows } from '../../../dummieData';
import './userList.css';

export default function UserList() {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    {
      field: 'user',
      headerName: 'Username',
      width: 130,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 130 },
    // { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      // type: 'number',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      // type: 'number',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/mitarbeiter/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
    // {
    //   field: 'action',
    //   headerName: 'Action',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    // },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={3}
        checkboxSelection
      />
    </div>
  );
}

// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// const useRowStyles = makeStyles({
//   root: {
//     '& > *': {
//       borderBottom: 'unset',
//     },
//   },
// });

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       { date: '2020-01-05', customerId: '11091700', amount: 3 },
//       { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const classes = useRowStyles();

//   return (
//     <React.Fragment>
//       <TableRow className={classes.root}>
//         <Checkbox />
//         <TableCell>
//           <IconButton
//             aria-label='expand row'
//             size='small'
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component='th' scope='row'>
//           {row.name}
//         </TableCell>
//         <TableCell align='right'>{row.calories}</TableCell>
//         <TableCell align='right'>{row.fat}</TableCell>
//         <TableCell align='right'>{row.carbs}</TableCell>
//         <TableCell align='right'>{row.protein}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout='auto' unmountOnExit>
//             <Box margin={1}>
//               <Typography variant='h6' gutterBottom component='div'>
//                 History
//               </Typography>
//               <Table size='small' aria-label='purchases'>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align='right'>Amount</TableCell>
//                     <TableCell align='right'>Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component='th' scope='row'>
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align='right'>{historyRow.amount}</TableCell>
//                       <TableCell align='right'>
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

// export default function CollapsibleTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label='collapsible table'>
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align='right'>Calories</TableCell>
//             <TableCell align='right'>Fat&nbsp;(g)</TableCell>
//             <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
//             <TableCell align='right'>Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
