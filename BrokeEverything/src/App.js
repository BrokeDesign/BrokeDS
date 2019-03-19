import React from "react";
import ReactDOM from "react-dom";
import {Footer, Header} from './components/layout';
import {Col, Grid, Row} from './components/grid';
import { Card, CardContent } from './components/card';

const App = () => {
    return (
        <div>
        <Header>
            <h1>BrokeDS - Broke Everything</h1>
        </Header>
        <Grid>
            <Row>
                <Col>
                    <Card container="card-container">
                        col-12
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col colSize="6">
                    col-6
                </Col>
                <Col colSize="6">
                    Col-6
                </Col>
            </Row>
        </Grid>
        
        <Footer><h1>Footer</h1></Footer>
        </div>
    );
};

export default App;
