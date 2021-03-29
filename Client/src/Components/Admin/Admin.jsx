import { Container, Grid, Button } from "@material-ui/core";
import greenTea from "./Station/Images/GreenTea.jpg";

import makeStyles from "./Styles";

const Admin = () => {
  const { station, days, table, image, sideBar, container } = makeStyles();
  return (
    <Container maxWidth="false" style={container}>
      <Grid container>
        <Grid item xs={2}>
          <Grid container spacing={2} direction="column" style={sideBar}>
            <Grid item>
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
        </Grid>

        <Grid item xs={10}>
          <Grid container direction="column" style={station}>
            <Grid item>
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
            </Grid>
            <Grid item>
              <Grid container style={table}>
                <Grid item>
                  <img src={greenTea} alt="Green Tea" style={image}></img>
                </Grid>
                <Grid item>
                  <img src={greenTea} alt="Green Tea" style={image}></img>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Admin;
