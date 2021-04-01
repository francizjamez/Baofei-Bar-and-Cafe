import axios from "axios";

const url = "https://baofei.herokuapp.com/";

export const getMenu = () => axios.get(url + "menu");
export const addMenu = (menu) => axios.post(url + "menu/add", menu);
