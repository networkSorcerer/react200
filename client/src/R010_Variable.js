import React, { Component } from  'react';

class R010_Variable extends Component {
    constructor(props) {
    super(props);
    this.state = {};
    }
    
    componentDidMount() {
    //var varName = 'react';
    //console.log('varNamel : '+varName);
    var varName = '200'; // ’varName' is already defined no-redeclare
    console.log('varName2 : '+varName);
    let letName = 'react'
    console.log('letNamel : '+letName);
    // let letName = '200'
    // Parsing error: Identifier 'letName* has already been declared
    letName = 'react200';
    console.log('letName2 : '+letName);
    const constName = ' react';
    console.log('constName : ' + constName);
    // const constName = '200’
    // Parsing error: Identifier 'constName' has already been declared
    // constName = 'react200'
    // Uncaught TypeError: Assignment to constant variable.
    }
    render() {
    return (
    <h2>[THIS IS Variable ]</h2>
    )
    }
    }
export default R010_Variable;

// 이미 선언한 van 변수 varName을 다시 선언했을 때 ‘varName’ is already defined no—redeclare라
// 는 경고 메시지가 콘솔 로그에 출력된다. 하지만 var 변수는 재선언, 재할당을 허용하기 때문에
// 경고 메시지가 출력돼도 페이지가 정상적으로 표시된다.
// 이미 선언한 let 변수 letName을 다시 선언했을 때 Parsing error： Identifier ‘letName’ has already
// been declared라는 에러 메시지가 콘솔 로그에 줄력된다. let 변수는 재선언을 허용하지 않기 때
// 문에 에러 페이지가 표시된다.
// let 변수는 재할당을 허용한다. 이미 선언한 let 변수 letName에 새로운 값을 할당했을 때 페이
// 지가 정상적으로 표시된다.
// 이미 선언한 const 변수의 constName을 다시 선언했을 때 Parsing error： Identifier ‘constName’
// has already been declared라는 에러 메시지가 콘솔 로그에 줄력된다. const 변수는 재선언을 허
// 용하지 않기 때문에 에러 페이지가 표시된다.
// 이미 선언한 const 변수 constName에 새로운 값을 할당했을 때 Uncaught TypeError：
// Assignment to constant variable라는 에러 메시지가 콘솔 로그에 줄력된다. const 변수는 재할당
// 을 허용하지 않기 때문에 에러 페이지가 표시된다