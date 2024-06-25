
import './App.css';
import React from 'react';
import ImportComponent from './R003_ImportComponent';
import LifecycleEx from './R004_LifecycleEx';
import LifecycleEx1 from './R005_LifecycleEx';
import LifecycleEx2 from './R006_LifecycleEx';
import LifecycleEx7 from './R007_LifecycleEx';
import LifecycleEx8 from './R008_LifecycleEx';
import Es6 from './R009_Es6';
import Variable from './R010_Variable';
import SpreadOperator from './R011_SpreadOperator';
import ClassPrototype from './R012_Class&Prototype';
import ArrowFunc from './R013_ArrowFunction';
import ForEach from './R014_ForEach';
import Map from './R015_Map';
function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p> 
      <ImportComponent></ImportComponent>
      <LifecycleEx></LifecycleEx>
      <LifecycleEx1></LifecycleEx1>
      <LifecycleEx2
        prop_value = 'FromApp.js'
      />
      <LifecycleEx7></LifecycleEx7>
      <LifecycleEx8></LifecycleEx8>
      <Es6/>
      <Variable/>
      <SpreadOperator/>
      <ClassPrototype></ClassPrototype>
      <ArrowFunc/>
      <ForEach/>
      <Map/>
    </div>
  );
}

export default App;
