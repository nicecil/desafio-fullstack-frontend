import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableHead,
  TableRow, Paper, Checkbox, IconButton
} from '@material-ui/core';
import Pagination from "material-ui-flat-pagination";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles({
  root: {
    margin: 50

  },
  tableHeader: {
    fontWeight: 550,
  },

  rowColorEven: {
    backgroundColor: "#f5f5f5"
  },

  rowColorOdd: {
    backgroundColor: "#e9e9e9"
  },

  table: {
    padding: '50 px',
    minWidth: 650,
  },

  tableBody: {
    padding: '50 px',
  },

  hover: {
    "&$hover:hover": {
      backgroundColor: "#ffffff"
    }
  }
});


const colorEvenOdd = (classes, index) => {
  return (index % 2) ? classes.rowColorOdd : classes.rowColorEven
};

const filterByUserText = (list, query) => {
  return list.filter(function(element) {
  return element.user.toLowerCase().includes(query.toLowerCase())})
};

export default function UserTable(props) {
  const classes = useStyles();
  const {tableInfo} = props
  const [selected, setSelected] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const searchBarText = props.searchBarText

  const filteredTableInfo = filterByUserText(tableInfo, searchBarText)
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangeOffset = (event, offset) => {
    setOffset(offset);
  };

  const isSelected = name => selected.indexOf(name) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage,
      filteredTableInfo.length - offset);

  return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="enhanced table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeader}></TableCell>
                <TableCell className={classes.tableHeader}>USUÁRIO</TableCell>
                <TableCell className={classes.tableHeader}
                           align="left"
                           padding='none'>EMAIL</TableCell>
                <TableCell className={classes.tableHeader} align="left">
                  DATA DE INCLUSÃO</TableCell>
                <TableCell className={classes.tableHeader} align="center">
                  DATA DE ALTERAÇÃO</TableCell>
                <TableCell className={classes.tableHeader} align="center">
                  REGRAS</TableCell>
                <TableCell className={classes.tableHeader} align="center">
                  STATUS</TableCell>
                <TableCell className={classes.tableHeader} align="right">
                  AÇÕES</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {filteredTableInfo.slice(offset, offset + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.user);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (<TableRow
                            hover={true}
                            classes={{hover: classes.hover}}
                            className={colorEvenOdd(classes, index)}
                            onClick={event => handleClick(event, row.user)}
                            selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                                checked={isItemSelected}
                                inputProps={{'aria-labelledby': labelId}}
                            />
                          </TableCell>

                          <TableCell align="left">{row.user}</TableCell>
                          <TableCell align="left">{row.email}</TableCell>
                          <TableCell align="center">{row.inclusion}</TableCell>
                          <TableCell align="center">{row.modified}</TableCell>
                          <TableCell align="center">{row.rules}</TableCell>
                          <TableCell align="center">{row.status}</TableCell>
                          <TableCell align="right">
                            <IconButton size="small">
                              <MoreHorizIcon/>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                    );
                  })}
              {emptyRows > 0 && (
                  <TableRow style={{height: 53 * emptyRows}}>
                    <TableCell colSpan={8}/>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>

        <Pagination
            limit={rowsPerPage}
            offset={offset}
            total={filteredTableInfo.length}
            innerButtonCount={1}
            outerButtonCount={0}
            nextPageLabel={"Próximo"}
            previousPageLabel={"Anterior"}
            onClick={(e, offset) =>
                handleChangeOffset(e, offset)}
        />
      </div>
  );
}