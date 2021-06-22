import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/thumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyles from "./styles";
import moment from 'moment'
import posts from "../../../reducers/posts";
/* Using ({post}) rather than (post) destructures the prop, so it gets the data from the post object */
function Post({post}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.created).fromNow()}</Typography>

      </div>
      <div className={classes.overlay2}>
        <Button style={{color: 'white'}} size='small' onClick={()}></Button>
      </div>
    </Card>
  )
}

export default Post;
