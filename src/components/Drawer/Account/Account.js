import React from "react";
import FaceIcon from "@material-ui/icons/Face";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const Account = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton style={{ backgroundColor: "#464342" }}>
        <FaceIcon style={{ color: "#ffffff" }} />
      </IconButton>
      <Typography style={{ color: "#ffffff" }} variant="body2">
        JITO
      </Typography>
      <IconButton style={{ backgroundColor: "#464342" }}>
        <MoreHorizIcon style={{ color: "#ffffff" }} />
      </IconButton>
    </div>
  );
};

export default Account;
