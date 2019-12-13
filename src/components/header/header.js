import React from 'react';
import {Grid, Paper, Button, IconButton, InputBase, Divider} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const style = {
  Paper: {
    marginTop: -20,
    marginLeft: -10,
    marginRight: -10
  },
  Grid: {
    backgroundColor: '#f5f5f5',
    marginLeft: 50,
    paddingTop: 20,
    paddingBottom: 20,
    marginRight: 50
  },
  PersonButton: {
    width: 44,
    height: 44
  },
  Button: {
    height: 44
  }
}
const classes = {
  input: {
    flex: 1,
    height: 400
  }
}


const onTextFieldChange = (event, setSearchBar) => {
  setSearchBar(event.target.value)
}

export default (props) => {
  const setSearchBarText = props.setSearchBar

  return (
      <div className={classes.root} style={{marginTop: 20}}>
        <Paper elevation={4} style={style.Paper}>
          <Grid container style={style.Grid}>
            <Grid
                container
                item
                spacing={2}
                xs={8}
            >
              <Grid item>
                <Button variant="contained" color="secondary" style={style.Button}>
                  <PersonIcon/>
                </Button>
              </Grid>

              <Grid item>
                <Paper component="form">
                  <InputBase
                      style = {{paddingLeft: '15px'}}
                      className={classes.input}
                      placeholder="Pesquisar..."
                      inputProps={{'aria-label': 'Pesquisar...'}}
                      onChange={event => onTextFieldChange(event, setSearchBarText)}
                  />
                  <IconButton type="submit">
                    <SearchIcon/>
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>

            <Grid
                direction={"row"}
                container
                item
                spacing={2}
                xs={4}
            >
              <Grid item>
                <Button variant="contained" color="#ffffff" style={style.Button}>
                  <TuneIcon/>
                </Button>
              </Grid>

              <Grid item>
                <Button
                    variant="contained"
                    color="secondary"
                    style={style.Button}
                    startIcon={<PersonIcon/>}
                >
                  Incluir Usuário
                </Button>
              </Grid>
              <Grid item>
                <IconButton>
                  <HomeIcon/>
                </IconButton>
                <IconButton>
                  <SettingsIcon/>
                </IconButton>
                <IconButton>
                  <PowerSettingsNewIcon/>
                </IconButton>
              </Grid>
            </Grid>

          </Grid>

        </Paper>
      </div>
  )
}