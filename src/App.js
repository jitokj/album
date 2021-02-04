import React from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Drawer from "./components/Drawer/Drawer";
import Heading from "./components/Heading/Heading";
import Main from "./components/Main/Main";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Hidden smUp>
          <Grid item xs={12}>
            <Drawer />
          </Grid>
          <Grid item xs={12}>
            <Heading />
          </Grid>
          <Grid item xs={12}>
            <Main />
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item md={2}>
            <Paper className={classes.paper}>drawer</Paper>
          </Grid>
          <Grid item md={10}>
            <Paper className={classes.paper}>1</Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

export default App;
