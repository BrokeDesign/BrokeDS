import React from "react";
import ReactDOM from "react-dom";
import { Footer, Header } from "./components/layout";
import { Col, Grid, Row } from "./components/grid";
import { Card, CardContent, CardFoot, CardHead } from "./components/card";

const App = () => {
    return (
        <div>
        <Header>
            Header
        </Header>
        <article className="container">
            <h2>Grid</h2>
            <hr/>
            <Grid>
                <Row>
                    <Col>

                    </Col>
                    <Col colSize="6">
                        colSize="6"
                    </Col>
                    <Col colSize="6">
                        colSize="6"
                    </Col>
                    <Col colSize="3">
                        colSize="3"
                    </Col>
                    <Col colSize="9">
                        colSize="9"
                    </Col>
                    <Col colSize="6" offset="col-offset-6">
                        colSize="6" offset="col-offset-6"
                    </Col>
                </Row>
            </Grid>
            <br/>
            <br/>
            <h2>Cards</h2>
            <Card>
                <CardHead>
                    Card Head
                </CardHead>
                <CardContent>
                Card Content
                </CardContent>
                <CardFoot>
                    Card Foot
                </CardFoot>
            </Card>
            <br/><br/>
            <h2>Buttons</h2>
            <div className="wrapper">
            <button type="button" class="button-alpha">
                button-alpha
            </button>
            <button type="button" class="button-beta">
                button-beta
            </button>
            <button type="button" class="button-gamma">
                button-gamma
            </button>
            <button type="button" class="button-psi">
                button-psi
            </button>
            <button type="button" class="button-omega">
                button-omega
            </button>

            </div>
        </article>
        <Footer>
            Footer
        </Footer>
        </div>
    );
};

export default App;
