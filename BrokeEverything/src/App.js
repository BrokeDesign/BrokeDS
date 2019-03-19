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
            <Row border="outline">
                <Col colSize={12}>
                    <Card container="card-container">
                        col-12
                    </Card>
                </Col>
            </Row>
        </Grid>
        
        <Footer><h1>Footer</h1></Footer>
        </div>
    );
};

export default App;
