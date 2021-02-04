import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import PersonIcon from "@material-ui/icons/Person";
import ContactsIcon from "@material-ui/icons/Contacts";
import MessageIcon from "@material-ui/icons/Message";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Ad from "./Ad/Ad";
import Account from "./Account/Account";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#1f1f1f",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#ffffff",
    marginRight: "20px",
  },
  paper: {
    background: "#1f1f1f",
  },

  heading: {
    color: "#ffffff",
  },

  listItem: {
    color: "#ffffff",
  },

  list: {
    width: 200,
    backgroundColor: "#1f1f1f",
    marginLeft: "20px",
    marginTop: "10px",
  },
});

const Drawer = () => {
  const styles = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const sideDrawer = (anchor) => (
    <div
      className={styles.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography classes={{ h6: styles.heading }} variant="h6">
        Puzzle
      </Typography>
      <List style={{ marginRight: "10px" }}>
        <ListItem button style={{ backgroundColor: "#35cda7" }}>
          <ListItemIcon>
            <IconButton>
              <CameraAltIcon style={{ color: "#ffffff" }} />
            </IconButton>
          </ListItemIcon>
          <ListItemText
            classes={{ primary: styles.listItem }}
            primary={"Media Library"}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: styles.listItem }}
            primary={"About Me"}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactsIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: styles.listItem }}
            primary={"Contacts"}
          />
        </ListItem>
      </List>
      <Divider classes={{ root: styles.divider }} />

      <List style={{ marginRight: "10px" }}>
        <ListItem button>
          <ListItemIcon>
            <MessageIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: styles.listItem }}
            primary={"Messages"}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TrendingUpIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: styles.listItem }}
            primary={"Statistics"}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon style={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: styles.listItem }}
            primary={"Notification"}
          />
        </ListItem>
      </List>
      <Ad />
      <Account />
    </div>
  );

  return (
    <div className={styles.root}>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon style={{ color: "#ffffff" }} />
        </IconButton>
        <Typography classes={{ h6: styles.heading }} variant="h6">
          Puzzle
        </Typography>
        <SwipeableDrawer
          classes={{ paper: styles.paper }}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {sideDrawer("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default Drawer;
