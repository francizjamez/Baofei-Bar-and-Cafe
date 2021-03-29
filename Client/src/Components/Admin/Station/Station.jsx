import React from "react";
import { Grid } from "@material-ui/core";

import Days from "./Days/Days";
import Table from "./Table/Table";

import makeStyles from "./Styles";

const Station = () => {
  const { station } = makeStyles();
  return (
    <Grid container direction="column" style={station} alignItems="stretch">
      <Grid item>
        <Days />
      </Grid>

      <Grid item>
        <Table />
      </Grid>
    </Grid>
  );
};

export default Station;
