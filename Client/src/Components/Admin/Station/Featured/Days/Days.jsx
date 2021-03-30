import { Button } from "@material-ui/core";
import "./Days.css";
const Days = () => {
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="days-container">
      {dayNames.map((val) => {
        return (
          <Button size="large" fullWidth id={val}>
            {val}
          </Button>
        );
      })}
    </div>
  );
};

export default Days;
