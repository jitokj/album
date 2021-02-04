import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "#1f1f1f",
  },
});

const Main = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default Main;
