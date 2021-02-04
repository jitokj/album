import { Button, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#1f1f1f",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Heading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" style={{ color: "#FFFFFF" }} gutterBottom>
        Media Library
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
      >
        Add New
      </Button>
    </div>
  );
};

export default Heading;
