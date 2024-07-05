import React, { Component } from "react";

class R072_onSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedValue: ''
        };
        this.Submit = this.Submit.bind(this);
    }

    Submit(e) {
        var inputValue = document.getElementById("inputId").value;
        this.setState({ submittedValue: inputValue });
        console.log("inputValue : " + inputValue);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.Submit}>
                <h1>{this.state.submittedValue}</h1>
                <input type="text" name="inputName" id="inputId" />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default R072_onSubmit;
