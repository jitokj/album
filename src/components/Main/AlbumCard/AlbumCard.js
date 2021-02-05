import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "../../../api/api";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { CardMedia, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  progress: {
    position: "relative",
    left: "50%",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function AlbumCard() {
  const classes = useStyles();

  const [url, setUrl] = useState("");
  const [profile, setProfile] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    axios.get("photos/random").then((response) => {
      console.log(response.data);
      setUrl(response.data.urls.small);
      setProfile(response.data.user.profile_image.small);
      setTitle(response.data.alt_description);
      setDate(response.data.created_at);
      setBio(response.data.user);
    });
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={profile}
            className={classes.avatar}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      {url ? (
        <CardMedia className={classes.media} image={url} title={title} />
      ) : (
        <CircularProgress className={classes.progress} />
      )}

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${bio?.first_name}  ${bio?.last_name}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {bio?.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
