import MenuInterface from "../../../Menu/Menu";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import FileBase from "react-file-base64";
import "./Menu.css";
import axios from "axios";

const Menu = () => {
  const [showForm, setShow] = useState(false);

  const [menuData, setMenuData] = useState({});

  const toggleForm = () => {
    setShow(!showForm);
  };

  const setPicture = (base64) => {
    setMenuData({
      ...menuData,
      img: base64,
    });
  };

  const setMenuName = (e) => {
    setMenuData({
      ...menuData,
      menuName: e.target.value,
    });
  };

  const saveMenu = (e) => {
    e.preventDefault();

    axios.post("https://baofei.herokuapp.com/add", menuData);
    console.log("tried to post");
  };

  return (
    <div className="menu-container">
      <div className="interface">
        <MenuInterface />
      </div>

      <div className="overlay">
        <Button
          className="add-btn"
          variant="outlined"
          color="primary"
          onClick={() => toggleForm()}
        >
          Add
        </Button>

        {showForm && (
          <form className="form">
            <TextField label="Name" onChange={(e) => setMenuName(e)} />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPicture(base64)}
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={(e) => saveMenu(e)}
            >
              Confirm
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Menu;
