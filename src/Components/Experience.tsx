import { Container, Fade, Grid } from "@material-ui/core";
import React from 'react';
import styled from 'styled-components';
import { Info } from "../styles/info.styles";


const Experience = () => {

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
                  <h1>Experience</h1>
                </Info>

                <JobDetails>
                  <h3>Brain Station 23 Limited ( September 2020 - Present )</h3>
                  <hr />

                  <h5>Associate Software Engineer ( March 2021 - Present )</h5>
                  <p>
                    Working as a JavaScript Developer using Vue. Also working
                    building backend and API using Nodejs and GraphQL.
                  </p>
                  <p>
                    <span>NodeJs</span> <span>ExpressJs</span>{" "}
                    <span>GraphQL</span> <span>Vue</span>
                  </p>

                  <br />
                  <hr />
                  <h5>
                    Trainee Software Engineer ( September 2020 - February 2021 )
                  </h5>
                  <p>
                    Learnt and Built applications with TypeScript, Redux, Redux Thunk, Styled
                    Components.
                  </p>
                  <p>
                    <span>React</span> <span>Redux</span>{" "}
                    <span>Redux Thunk</span> <span>Styled Components</span>{" "}
                    <span>TypeScript</span>
                  </p>
                </JobDetails>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </Fade>
    </div>
  );
}

export default Experience

const JobDetails = styled.div`
  h3 {
    margin-top: 50px;
  }

  h5 {
    font-size: 20px;
  }

  span {
    background: #39e600;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;
