import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  TextField,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import "./Items.css";
import FileBase from "react-file-base64";
import { getMenu, addItem } from "../../../../api";

const Items = () => {
  const [itemData, setItemData] = useState({
    itemName: "",
    price: 0,
    img: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getMenu().then((res) => setCategories(res.data));
  }, [categories]);

  const selectCategory = (e) => {
    setItemData({
      ...itemData,
      category: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    addItem(itemData);
  };

  const setPicture = (base64) => {
    setItemData({
      ...itemData,
      img: base64,
    });
  };

  const changeName = (e) => {
    setItemData({
      ...itemData,
      itemName: e.target.value,
    });
  };

  const changePrice = (e) => {
    setItemData({
      ...itemData,
      price: e.target.value,
    });
  };

  const { category, itemName, price } = itemData;

  return (
    <form onSubmit={submitForm}>
      <FormControl required={true}>
        <InputLabel id="category">Category</InputLabel>
        <Select onChange={selectCategory} labelId="category" value={category}>
          {categories.map(({ menuName }) => (
            <MenuItem value={menuName}>{menuName}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField label="Name" onChange={changeName} value={itemName} />
      <TextField
        label="Price"
        onChange={changePrice}
        value={price}
        type="number"
      />

      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => setPicture(base64)}
      />
      <Button type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default Items;
