
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
//import ArrowFunc from './R013_ArrowFunction';
import ForEach from './R014_ForEach';
import Map from './R015_Map';
import Jquery from './R016_Jquery';
import Props from './R017_Props';
import PropsDatatype from './R018_PropsDatatype.js';
import PropsBoolean from './R019_PropsBoolean';
import PropsObjVal from './R20_PropsObjVal';
import PropsRequired from './R021_PropsRequired';
import PropsDefault from './R022_PropsDefault';
import PropsNode from './R023_PropsNode.js';
import ReactState from './R024_ReactState.js';
import SetState from './R025_SetState.js';
import ForceUpdate from './R026_ForceUpdate.js';
import ComponentClass from './R027_ComponentClass.js';
import  PureComponentClass  from './R028_PureComponentClass.js';
import ShallowEqual from './R029_ShallowEqua.js';
import FunctionComponent from './R030_FunctionComponent'
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
      {/* <ArrowFunc/> */}
      <ForEach/>
      <Map/>
      <Jquery/>
      <Props props_val="THIS IS PROPS"/>
      <PropsDatatype
      String="react"
      Number={200}
      Boolean={1==1}
      Array={[0,1,8]}
      Object_Json={{react:"리액트", twohundred:"200"}}
      Function={console.log("FunctionProps: function!")}
      />
      <PropsBoolean BooleanTrueFalse={false}/>
      <PropsBoolean BooleanTrueFalse/>
      <PropsObjVal Object_Json={{react:"리액트",twohundred:"200"}}/>
      <PropsRequired ReactNumber={200}/>
      <PropsDefault ReactNumber={200}/>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
      <ReactState reactString={"react"}/>
      <SetState/>
      <ForceUpdate/>
      <ComponentClass/>
      <PureComponentClass/>
      <ShallowEqual/>
      <FunctionComponent contents="[THIS IS FUNCTIONCOMPONENT]"/>
    </div>
  );
}

export default App;
