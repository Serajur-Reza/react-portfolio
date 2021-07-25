import { Container, Fade, Grid } from '@material-ui/core';
import React from 'react';
import { Info } from "../styles/info.styles";


const Contact = () => {
  const styles = {
    marginTop: "50px",
  };
  return (
    <div style={styles}>
      <Fade in={true} timeout={2000}>
        <Container>
          <Grid>
            <Grid container spacing={1}>
              <Grid
                container
                item
                xs={12}
                spacing={4}
                direction="row"
                justify="center"
                alignItems="center"
                style={{ minHeight: "50vh" }}
              >
                <Grid item xs={10}>
                  <Info>
                    <h1>Contact</h1>

                    <h3 style={{ textAlign: "center" }}>Say 'Hello' to me</h3>

                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <h2>Email</h2>
                        <p>rezainfinity54@gmail.com</p>

                        <h2>LinkedIn</h2>
                        <p>/in/serajurreza/</p>
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <h2>Facebook</h2>
                        <p>/radioactiveranger</p>

                        <h2>Twitter</h2>
                        <p>@Imradio_active</p>
                      </Grid>
                    </Grid>
                  </Info>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}

export default Contact
