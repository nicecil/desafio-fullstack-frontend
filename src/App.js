import React from 'react';
import './App.css';
import UserTable from "./components/table/table";
import TableData from "./mocks/mocks"
import {Button} from "@material-ui/core"
import Header from "./components/header/header"

function App() {
  const [searchBarState, setSearchBarState] = React.useState("")
  return (
      <div className="App">
        <Header setSearchBar = {setSearchBarState}></Header>
        <UserTable
            tableInfo={TableData}
        searchBarText = {searchBarState}
        > </UserTable>
      </div>
  )
}

export default App;
//
// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     overflowX: 'auto',
//     margin: '20 px'
//   },
//   table: {
//     minWidth: 650,
//   },
// });
//
// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
//
// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

//
// export default function SimpleTable() {
//   const classes = useStyles();
//
//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>USUÁRIO</TableCell>
//             <TableCell align="right">EMAIL</TableCell>
//             <TableCell align="right">DATA DE INCLUSÃO</TableCell>
//             <TableCell align="right">DATA DE ALTERAÇÃO</TableCell>
//             <TableCell align="right">REGRAS</TableCell>
//             <TableCell align="right">STATUS</TableCell>
//             <TableCell align="right">AÇÕES</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }
//
// function App() {
//   return (
//
//       <Button variant="contained" color="primary">
//         hello world i am here
//       </Button>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }
//
// export default App;
