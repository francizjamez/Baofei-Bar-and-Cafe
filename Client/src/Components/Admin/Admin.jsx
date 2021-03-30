import { Container, Grid, CssBaseline } from "@material-ui/core";
import Sidebar from "./Sidebar/Sidebar";
import Station from "./Station/Station";

import { useState } from "react";

const Admin = () => {
  const [page, setPage] = useState("menu");

  const changePage = (pageName) => {
    setPage(pageName);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="false">
        <Grid container>
          <Grid item xs={2}>
            <Sidebar changePage={changePage} />
          </Grid>
          <Grid item xs={10}>
            <Station page={page} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Admin;
