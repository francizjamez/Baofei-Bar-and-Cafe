import imgGreenTea from "../Images/GreenTea.jpg";
import { TextField } from "@material-ui/core";

const Table = () => {
  return (
    <div>
      <img src={imgGreenTea} alt="Green tea"></img>
      <TextField label="Name"></TextField>
    </div>
  );
};

export default Table;
