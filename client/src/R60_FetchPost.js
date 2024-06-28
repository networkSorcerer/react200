import React, {Component} from "react";

class R60_FetchPost extends Component {
    componentDidCatch = async () =>{
        const response = await fetch('http://date.jsontest.com/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: {a:"react", b:200},
        });

        const body = await response.json();
        alert(body.date)
    }

    render() {
        return (
            <h1>fetch post</h1>
        )
    }
}

export default R60_FetchPost;