import { Grid, Button } from "@material-ui/core";
import makeStyles from "./Styles";

const Days = () => {
  const { days } = makeStyles();
  return (
    <Grid container style={days} justify="center">
      <Grid item>
        <Button size="large" fullWidth variant="outlined">
          Monday
        </Button>
      </Grid>
      <Grid item>
        <Button size="large" full Width variant="outlined">
          Tuesday
        </Button>
      </Grid>
    </Grid>
  );
};

export default Days;
