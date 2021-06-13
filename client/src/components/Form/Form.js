import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
function Form() {
  const [postData, setPostdata] = useState({
    creator: "", title: '', messsage: '', tags: '', selectedFile: '',
  })
  const classes = useStyles();
  const handleSubmit = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" variant="outline" label="Creator" fullWidth value={postData.creator} onChange={e=>setPostdata({ creator.e.target.value })} />

      </form>
    </Paper>
  );
}

export default Form;
