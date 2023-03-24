import { Typography, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const ButtonCom = () => {
  return (
    <div>
      {" "}
      <Typography variant="h1" component={"h2"} sx={{ color: "red" }}>
        Material Ui
      </Typography>
      <h1>BUTTON</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="success" sx={{ margin: "30px" }}>
        Contained
      </Button>
      <Button variant="outlined" onClick={() => alert("you clicked")}>
        Outlined
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <IconButton aria-label="delete" color="primary">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default ButtonCom;
