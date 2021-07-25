import { Container, Fade, Grid } from '@material-ui/core';
import React from 'react';
import { Info } from "../styles/info.styles";

const About = () => {
  const styles = {
    marginTop: '50px',
  }
  return (
    <div style={styles}>
      <Fade in={true} timeout={2000}>
      <Container>
        <Grid container spacing={1}>
          <Grid
            container
            item
            xs={12}
            spacing={4}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "50vh" }}
          >
            <Grid item xs={10}>
              <Info>
                <h1>About Me</h1>
                <p>
                  Hello! I am Serajur Reza Chowdhury. I am a Web Developer and
                  Software Engineer. I develop web applications in JavaScript,
                  both front-end and back-end. My core skill is based on
                  JavaScript. I am a Computer Science graduate from BRAC
                  University.
                </p>
              </Info>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </Fade>
    </div>
  );
}

export default About

