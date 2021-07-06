import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

// GET THE CURRENT ID OF THE POST

function Form({ currentId, setCurrentId }) {
  const [postData, setPostdata] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  // using redux
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostdata(post);
  }, [post]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostdata({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  // if no user is logged in
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own posts and like other posts.
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          /* using ...postData so as to not overwrite everytime a creaotr is created */
          onChange={(e) => setPostdata({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          /* using ...postData so as to not overwrite everytime a creaotr is created */
          onChange={(e) =>
            setPostdata({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          /* using ...postData so as to not overwrite everytime a creaotr is created */
          onChange={(e) =>
            setPostdata({ ...postData, tags: e.target.value.split(",") })
          }
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostdata({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          onClick={clear}
          variant="contained"
          color="secondary"
          size="small"
          type="submit"
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
