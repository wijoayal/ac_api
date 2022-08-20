/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";


function Counters() {

  const [stats, setStats] = useState({});

  const getStats = async() => {
    await fetch('https://espol-smart-ac-control.herokuapp.com/ac_stats/ac_1').then((response) => response.json()).then((data) => {
      setStats(data);
    });
  };

  useEffect(async () => {
    await getStats();
  })

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>

            <DefaultCounterCard
              count={stats.temp}
              color="warning"
              suffix="°C"
              title="Temperature"
              description="Temperature of the room"
            />

          </Grid>
          <Grid item xs={12} md={4}>

            <DefaultCounterCard
              count={stats.hum}
              color="info"
              suffix="%"
              title="Humidity"
              description="Humidity of the room"
            />

          </Grid>
          <Grid item xs={12} md={4}>

            <DefaultCounterCard
              count={34}
              color="secondary"
              suffix="%"
              title="Use percentage"
              description="Use percentage by day"
            />

          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
