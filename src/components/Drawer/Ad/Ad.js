import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    marginRight: 10,
    height: 150,
    background: "linear-gradient(to right,#418dff,#8d68fa)",
  },
});

const Ad = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" style={{ color: "#ffffff" }}>
            Upgrade Your Account
          </Typography>
          <p style={{ color: "#ffffff", fontSize: "10px" }}>
            DownLoad Content without Limit
          </p>
          <Button
            variant="contained"
            style={{ color: "#000", backgroundColor: "#fff" }}
          >
            Go Pro
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Ad;
