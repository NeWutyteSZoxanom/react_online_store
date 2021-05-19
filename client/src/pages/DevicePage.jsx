import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const DevicePage = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DevicePage;
