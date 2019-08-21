import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    state = { time: "date" };

    changeTime = () => {
        let today = new Date();
        let date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate();
        var time =
            today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + " " + time;

        this.setState({ time: dateTime });
    };



    render() {
        return (
            <div>
                Date  : {this.state.time}
                <br />
                <button onClick={this.changeTime}>Change time</button>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



// druha moznost

import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    state = { time: "date" };

    changeTime = () => {
      var d = new Date();
      var n = d.toLocaleString();

        this.setState({ time: n });
    };



    render() {
        return (
            <div>
                Date  : {this.state.time}
                <br />
                <button onClick={this.changeTime}>Change time</button>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);