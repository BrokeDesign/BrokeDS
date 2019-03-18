import React from "react";
import ReactDOM from "react-dom";
import {Footer, Header} from './components/layout';

const App = () => {
    return (
        <div>
        <Header>
            <h1>Grid</h1>
        </Header>
        <section>
            <h2>Example with even row & column classes</h2>
        </section>
        <Footer><h1>Footer</h1></Footer>
        </div>
    );
};

export default App;
