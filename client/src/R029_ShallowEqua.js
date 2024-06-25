import React, { Component } from "react";
import isEqual from "lodash.isequal";

class R029_ShallowEqual extends Component {
    constructor(props) {
        super(props);
        this.state = { StateString: 'react' };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(this.state, nextState);
    }

    componentDidMount() {
        const object = { react: '200' };
        const Object1 = { '리액트': object };
        const Object2 = { '리액트': object };
        const Object3 = { '리액트': { react: '200' } };

        console.log('isEqual(Object1, Object2) : ' + isEqual(Object1, Object2));  // true
        console.log('isEqual(Object2, Object3) : ' + isEqual(Object2, Object3));  // false
        
        this.setState({ StateString: 'react' });
    }

    render() {
        console.log('render() 실행');
        return (
            <div>
                <p>Check the console for logs.</p>
            </div>
        );
    }
}

export default R029_ShallowEqual;
