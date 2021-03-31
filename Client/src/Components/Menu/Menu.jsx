import "./Style-Menu.css";

import { useState, useEffect } from "react";

import { getMenu } from "../../api";

const Menu = () => {
  const [menuItems, setMenu] = useState([]);

  useEffect(() => {
    getMenu().then((res) => setMenu(res.data));
  });

  return (
    <section class="menu" id="menu">
      <h1>MENU</h1>
      <div class="grid-container">
        {menuItems.length > 0 &&
          menuItems.map(({ menuName, img }) => (
            <a href={`/menu/#${menuName}`}>
              <img class="menu-image" src={img} alt={menuName} />
              <p>{menuName}</p>
            </a>
          ))}
      </div>
    </section>
  );
};

export default Menu;
