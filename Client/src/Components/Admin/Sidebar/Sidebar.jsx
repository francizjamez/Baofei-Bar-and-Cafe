import { Grid, Button } from "@material-ui/core";
import makeStyles from "./Styles";

const Sidebar = () => {
  const { sideBar } = makeStyles();
  return (
    <Grid container spacing={2} direction="column" style={sideBar}>
      <Grid item align="stretch">
        <Button color="secondary" fullWidth>
          Featured
        </Button>
      </Grid>
      <Grid item>
        <Button color="primary" fullWidth>
          Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
