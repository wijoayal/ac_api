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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import React, { useEffect, useState } from "react";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {

  // const [task_on, setStats] = useState({});

  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' }
  //   };
  //   fetch('https://espol-smart-ac-control.herokuapp.com/task/ac_1?payload=on', requestOptions)
  //     .then(response => response.json())
  //     .then(data => setStats(data.id));

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, [])



  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.fiec.espol.edu.ec/es/telematica-generalidades",
          label: "ESPOL TELEMATICA",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              textAlign="center"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              ESPOL SMART AC MANAGER{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Sistema automatizado de control
              de aires acondicionados.
              Telematica 2022
              SMART AC MANAGER (SAM)
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <MKBox
          minHeight="75vh"
          width="100%">
          <Container>

            <Grid item xs={0} lg={0} ml="auto" sx={{ textAlign: { xs: "center", lg: "center" } }}>
              <MKTypography variant="h2" fontWeight="bold" mb={0.6}>
                HTTP REMOTE CONTROL
              </MKTypography>
              <MKTypography variant="body" color="text">
                Use it wisely!
              </MKTypography>
            </Grid>
            <Grid item xs={0} lg={0} ml="auto" sx={{ textAlign: { xs: "center", lg: "center" } }}>

              <MKSocialButton
                onClick={() => {
                  var requestOptions = {
                    method: 'POST',
                    redirect: 'follow'
                  };

                  fetch("https://espol-smart-ac-control.herokuapp.com/task/ac_1?payload=on", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
                }}
                component="a"
                target="_blank"
                color="facebook"
                sx={{ mr: 10 }}
              >

                &nbsp;TURN ON
              </MKSocialButton>

              <MKSocialButton
                onClick={() => {
                  var requestOptions = {
                    method: 'POST',
                    redirect: 'follow'
                  };

                  fetch("https://espol-smart-ac-control.herokuapp.com/task/ac_1?payload=off", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
                }}
                component="a"
                target="_blank"
                color="pinterest"
              >

                &nbsp;TURN OFF
              </MKSocialButton>

            </Grid>

          </Container>
        </MKBox>
      </Card>
    </>
  );
}

export default Presentation;
