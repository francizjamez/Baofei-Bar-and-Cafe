import Featured from "./Featured/Featured";
import Menu from "./Menu/Menu";

import "./Station.css";

const Station = ({ page }) => {
  return (
    <div className="station">
      {page === "featured" && <Featured />}
      {page === "menu" && <Menu />}
    </div>
  );
};

export default Station;
