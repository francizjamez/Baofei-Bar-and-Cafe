import "./Style-Menu.css";

import { useState, useEffect } from "react";

import axios from "axios";

const Menu = () => {
  const [menuItems, setMenu] = useState([]);

  useEffect(() => {
    axios.get("https://baofei.herokuapp.com/menu/").then((res) => {
      setMenu(res.data);
    });
  });

  return (
    <section class="menu" id="menu">
      <h1>MENU</h1>
      <div class="grid-container">
        <div>
          {menuItems.length > 0 &&
            menuItems.map(({ menuName, img }) => (
              <a href={`menu/${menuName}`}>
                <img class="menu-image" src={img} alt={menuName} />
                <p>{menuName}</p>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
