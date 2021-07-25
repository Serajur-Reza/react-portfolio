import {
  Container,
  Divider,
  Fade,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import {
  createStyles, Theme, withStyles
} from "@material-ui/core/styles";
import React from 'react';
import { Info } from "../styles/info.styles";



const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
    },
  })
)(LinearProgress);



function Skills() {
  const styles = {
    marginTop: "50px",
  };

  const skillSet = [
    { name: "TypeScript", ability: 70 },
    { name: "React", ability: 90 },
    { name: "Redux", ability: 70 },
    { name: "Vue", ability: 70 },
    { name: "Python", ability: 60 },
    { name: "Node JS", ability: 70 },
    { name: "Express", ability: 80 },
    { name: "MongoDB", ability: 80 },
    { name: "Mongoose", ability: 80 },
    { name: "GraphQL", ability: 60 },
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
                <h1>Skills</h1>

                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <List>
                      {skillSet
                        .slice(0, Math.round(skillSet.length / 2))
                        .map((elem, idx) => (
                          <div key={idx}>
                            <ListItem button>
                              <ListItemText primary={elem.name} />
                              <ListItemSecondaryAction>
                                {elem.ability}%
                              </ListItemSecondaryAction>
                            </ListItem>
                            <BorderLinearProgress
                              variant="determinate"
                              value={elem.ability}
                            />
                            <Divider />
                          </div>
                        ))}
                    </List>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <List>
                      {skillSet
                        .slice(Math.round(skillSet.length / 2))
                        .map((elem, idx) => (
                          <div key={idx}>
                            <ListItem button>
                              <ListItemText primary={elem.name} />
                              <ListItemSecondaryAction>
                                {elem.ability}%
                              </ListItemSecondaryAction>
                            </ListItem>
                            <BorderLinearProgress
                              variant="determinate"
                              value={elem.ability}
                            />
                            <Divider />
                          </div>
                        ))}
                    </List>
                  </Grid>
                </Grid>
              </Info>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </Fade>
    </div>
  );
}

export default Skills
