import React from "react";
import ReactDOM from "react-dom";
import { Footer, Header } from "./components/layout";
import { Col, Grid, Row } from "./components/grid";
import { Card, CardContent } from "./components/card";

const App = () => {
    return (
        <div className="container">
            <div className="container-head">
                <div className="title">Contiuous Grid (One row)</div>
                <hr />
            </div>

            <div className="row">
                <div className="col-12">Col-12</div>
                <div className="col-11">Col-11</div>
                <div className="col-1">Col-1</div>
                <div className="col-10">Col-10</div>
                <div className="col-2">Col-2</div>
                <div className="col-9">Col-9</div>
                <div className="col-3">Col-3</div>
                <div className="col-8">Col-8</div>
                <div className="col-4">Col-4</div>
                <div className="col-7">Col-7</div>
                <div className="col-5">Col-5</div>
                <div className="col-6">Col-4</div>
                <div className="col-6">Col-4</div>
                <div className="col-5">Col-5</div>
                <div className="col-5">Col-5</div>
                <div className="col-2">Col-2</div>
                <div className="col-3">Col-3</div>
                <div className="col-3">Col-3</div>
                <div className="col-3">Col-3</div>
                <div className="col-3">Col-3</div>
                <div className="col-4">Col-4</div>
                <div className="col-4 col-offset-4">Col-4 offset 4</div>
            </div>
        </div>
    );
};

export default App;
