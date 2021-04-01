import axios from "axios";

const url = "https://baofei.herokuapp.com/";

export const getMenu = () => axios.get(url + "menu");
export const addMenu = (menu) => axios.post(url + "menu/add", menu);

export const getItems = () => axios.get(url + "item");
export const addItem = (item) => axios.post(url + "item/add", item);
