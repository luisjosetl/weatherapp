import React, { Component } from 'react';
import { Grid, Row , Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import DenseAppBar from './materialUi/DenseAppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';


const cities = [
  "Chicago",
  "Caracas,ve",
  "Madrid,es",
  "Lima",
  "Valencia, ve"
];

class App extends Component {
  

  render() {
    return (
      <Grid>
        
        <Row>
          <Col xs={12}>
            <DenseAppBar />
            
          </Col>
        </Row>
        
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}>
            </LocationListContainer>
          </Col>

          <Col xs={12} md={6}>
            <Paper xdepth={4}>
              <div className='detail'>
                    <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
            
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;

