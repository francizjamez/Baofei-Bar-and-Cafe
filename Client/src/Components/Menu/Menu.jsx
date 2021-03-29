import "./Style-Menu.css";

import coffee from "./Images/Menu_coffee.jpg";
import tea from "./Images/Menu_tea.jpg";
import juice from "./Images/Menu_juice.jpg";
import pizza from "./Images/Menu_pizza.jpg";
import dougnut from "./Images/Menu_dougnut.jpg";
import burger from "./Images/Menu_burger.jpg";

const Menu = () => {
  return (
    <section class="menu" id="menu">
      <h1>MENU</h1>

      <div class="grid-container">
        <div>
          <a href="menu/coffee">
            <img class="menu-image" src={coffee} alt="Coffee" />
            <p>Coffees</p>
          </a>
        </div>

        <div>
          <a href="introduction">
            <img class="menu-image" src={tea} alt="Tea" />
            <p>Tea</p>
          </a>
        </div>

        <div>
          <a href="introduction">
            <img class="menu-image" src={juice} alt="Juice" />
            <p>Juice</p>
          </a>
        </div>

        <div>
          <a href="introduction">
            <img class="menu-image" src={pizza} alt="Pizza" />
            <p>Pizza</p>
          </a>
        </div>

        <div>
          <a href="introduction">
            <img class="menu-image" src={dougnut} alt="dougnut" />
            <p>Doughut</p>
          </a>
        </div>

        <div>
          <a href="introduction">
            <img class="menu-image" src={burger} alt="Burger" />
            <p>Burger</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
