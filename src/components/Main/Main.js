import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AlbumCard from "./AlbumCard/AlbumCard";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "#1f1f1f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
    </div>
  );
};

export default Main;
