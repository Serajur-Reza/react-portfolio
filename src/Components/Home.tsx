import { Button, ButtonGroup, Container, Divider, Fade, Grid } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from 'react';
import styled from "styled-components";

function Home() {

  const styles = {
    marginTop: '100px'
  }
  return (
    <div style={styles}>
      <Fade in={true} timeout={2000}>
      <Container>
        <Grid container spacing={5}>
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
              <Grid container spacing={4}>
                <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                  <h1>
                    I am <br />
                    Serajur Reza Chowdhury
                  </h1>
                  <h4>And I am a Full Stack developer</h4>

                  <Divider style={{ background: "white" }} />
                  <br />

                  <div>
                    <ButtonGroup
                      size="large"
                      color="primary"
                      aria-label="outlined primary button group"
                    ></ButtonGroup>
                    <Button
                      onClick={() =>
                        window.open("https://github.com/Serajur-Reza")
                      }
                    >
                      <GitHubIcon color="primary"></GitHubIcon>
                    </Button>
                    <Button
                      onClick={() =>
                        window.open("https://www.linkedin.com/in/serajurreza/")
                      }
                    >
                      <LinkedInIcon color="primary"></LinkedInIcon>
                    </Button>
                  </div>

                  <br />
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1iI58ElcnBu0KYg3WXCtM0dhKzjwphQ8K/view?usp=sharing"
                        )
                      }
                    >
                      See Resume
                    </Button>
                  </div>
                </Grid>

                <div>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                  >
                    <Image src="https://i.ibb.co/WGDc4y7/Reza-Pic.jpg" alt="" />
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </Fade>
    </div>
  );
}

export default Home

const Image = styled.img`
  
  margin: 50px 0px 0px 50px;
  width: 250px;
  height: 300px;
`;