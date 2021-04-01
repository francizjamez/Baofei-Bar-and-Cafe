import Featured from "./Featured/Featured";
import Menu from "./Menu/Menu";
import Items from "./Items/Items";

import "./Station.css";

const Station = ({ page }) => {
  return (
    <div className="station">
      {page === "featured" && <Featured />}
      {page === "menu" && <Menu />}
      {page === "items" && <Items />}
    </div>
  );
};

export default Station;
