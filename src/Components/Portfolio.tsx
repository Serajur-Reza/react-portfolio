import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Grid,
  Typography
} from "@material-ui/core";
import React from "react";
import { Info } from "../styles/info.styles";

function Portfolio() {
  const styles = {
    marginTop: "50px",
  };

   const cardStyle = {
     display: "block",
     maxWidth: '345',
     transitionDuration: "0.3s",
     minHeight: "35vw",
   };

  const projectInfo = [
    {
      title: "Hot-Onion Restaurant",
      image: "https://i.ibb.co/LNq2KLS/Screenshot-43.png",
      description:
        "A restaurant application where the user can order food. It has both payment and authentication system.",
      techs: ["React", "Node", "MongoDB"],
      gitHubFront: "https://github.com/Serajur-Reza/half-worked-restaurent",
      gitHubBack: "https://github.com/Serajur-Reza/red-onion-api",
      live: "https://hot-onion-ee688.web.app/",
    },
    {
      title: "Doctor's Portal",
      image: "https://i.ibb.co/Z86cnZC/Screenshot-44.png",
      description:
        "A application where the user can book appointment whenever he/she wants.",
      techs: ["React", "Node", "MongoDB"],
      gitHubFront: "https://github.com/Serajur-Reza/doctor-app",
      gitHubBack: "https://github.com/Serajur-Reza/doctor-app-api",
      live: "https://doctor-app-3e752.web.app/",
    },
    {
      title: "Power-x Gym",
      image: "https://i.ibb.co/1Q5HqRZ/Screenshot-45.png",
      description:
        "A front-end only application where the user can select a monthly training package of his/her choice.",
      techs: ["React"],
      gitHubFront: "https://github.com/Serajur-Reza/power-x",
      gitHubBack: "",
      live: "https://power-x-gym-4cda3.firebaseapp.com/",
    },
  ];
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
              direction="row"
              alignItems="center"
              justify="center"
              style={{ minHeight: "50vh" }}
            >
              <Grid item xs={10}>
                <Info>
                  <h1>Portfolio</h1>
                </Info>

                <Grid container spacing={4}>
                  {projectInfo.map((elem, idx) => {
                    return (
                      <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={idx}>
                        <Card style={cardStyle}>
                          <CardActionArea>
                            <CardMedia
                              width="100%"
                              height="140"
                              component="img"
                              image={elem?.image}
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {elem?.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                {elem?.description}
                              </Typography>

                              <br />
                              <Typography
                                variant="body2"
                                color="textPrimary"
                                component="h5"
                              >
                                Technologies -
                                {elem?.techs.map((item, index) => (
                                  <span key={index}> {item} </span>
                                ))}
                              </Typography>
                            </CardContent>
                          </CardActionArea>

                          <CardActions>
                            <Grid container spacing={3}>
                              <Grid item xs>
                                {elem?.gitHubFront && (
                                  <Button
                                    size="small"
                                    color="primary"
                                    onClick={() =>
                                      window.open(elem?.gitHubFront)
                                    }
                                  >
                                    Github(Front)
                                  </Button>
                                )}
                              </Grid>

                              <Grid item xs>
                                {elem?.gitHubBack && (
                                  <Button
                                    size="small"
                                    color="primary"
                                    onClick={() =>
                                      window.open(elem?.gitHubBack)
                                    }
                                  >
                                    Github(Back)
                                  </Button>
                                )}
                              </Grid>

                              <Grid item xs>
                                {elem?.live && (
                                  <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => window.open(elem?.live)}
                                  >
                                    Live
                                  </Button>
                                )}
                              </Grid>
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>

                <Grid
                  container
                  item
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ marginTop: "50px" }}
                >
                  <Grid item xs={12}></Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      window.open("https://github.com/Serajur-Reza")
                    }
                  >
                    More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}

export default Portfolio;
