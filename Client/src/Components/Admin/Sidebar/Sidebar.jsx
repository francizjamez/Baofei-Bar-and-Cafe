import { Button } from "@material-ui/core";
import "./Styles.css";

const Sidebar = ({ changePage }) => {
  return (
    <div className="sidebar">
      <Button
        size="large"
        color="secondary"
        fullWidth
        onClick={() => changePage("intro")}
      >
        Intro page
      </Button>
      <Button
        size="large"
        color="secondary"
        fullWidth
        onClick={() => changePage("featured")}
      >
        Featured
      </Button>
      <Button
        size="large"
        color="secondary"
        fullWidth
        onClick={() => changePage("menu")}
      >
        Menu
      </Button>
      <Button
        size="large"
        color="secondary"
        fullWidth
        onClick={() => changePage("items")}
      >
        Items
      </Button>
    </div>
  );
};

export default Sidebar;
