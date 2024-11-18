import "./App.css";
import React from "react";
import ImportComponent from "./R003_ImportComponent";
import LifecycleEx from "./R004_LifecycleEx";
import LifecycleEx1 from "./R005_LifecycleEx";
import LifecycleEx2 from "./R006_LifecycleEx";
import LifecycleEx7 from "./R007_LifecycleEx";
import LifecycleEx8 from "./R008_LifecycleEx";
import Es6 from "./R009_Es6";
import Variable from "./R010_Variable";
import SpreadOperator from "./R011_SpreadOperator";
import ClassPrototype from "./R012_Class&Prototype";
//import ArrowFunc from './R013_ArrowFunction';
import ForEach from "./R014_ForEach";
import Map from "./R015_Map";
import Jquery from "./R016_Jquery";
import Props from "./R017_Props";
import PropsDatatype from "./R018_PropsDatatype.js";
import PropsBoolean from "./R019_PropsBoolean";
import PropsObjVal from "./R20_PropsObjVal";
import PropsRequired from "./R021_PropsRequired";
import PropsDefault from "./R022_PropsDefault";
import PropsNode from "./R023_PropsNode.js";
import ReactState from "./R024_ReactState.js";
import SetState from "./R025_SetState.js";
import ForceUpdate from "./R026_ForceUpdate.js";
import ComponentClass from "./R027_ComponentClass.js";
import PureComponentClass from "./R028_PureComponentClass.js";
import ShallowEqual from "./R029_ShallowEqua.js";
import FunctionComponent from "./R30_FunctionComponent";
import ReactHook from "./R031_ReactHook";
import Fragment from "./R032_Fragments.js";
import ReturnMap from "./R033_ReturnMap";
import ReactstrapAlerts from "./R034_ReactstrapAlerts";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactstrapBadges from "./R035_ReactstrapBadges.js";
import ReactstrapBreadcrumbs from "./R036_ReactstrapBreadcrumbs.js";
import ReactstrapDropdown from "./R037_ReactstrapDropdown.js";
import ReactstrapButtonGroup from "./R038_ReactstapButtonGroup.js";
import ReactstrapBottons from "./R039_ReactstrapBottons.js";
import ReactstrapCard from "./R040_ReactstrapCard.js";
import ReactstrapCarousel from "./R041_ReactstrapCarousel.js";
import ReactstrapCollapse from "./R042_ReactstrapCollapse.js";
import ReactstrapFade from "./R043_ReactstrapFade";
import ReactstrapForm from "./R044_ReactstrapForm";
//import InputGroup from './R045_ReactstrapInputGroup';
//import Jumbotron from './R046_ReactstrapJumbotron';
import ListGroup from "./R047_ReactstrapListGroup";
import Modal from "./R048_ReactstrapModal";
import Navbar from "./R049_ReactstrapNavbar";
import Pagination from "./R050_ReactstrapPagination";
import Popover from "./R051_ReactstrapPopover";
import Progress from "./R052_ReactstrapPrograss";
import ReactstrapSpinner from "./R053_ReactstrapSpinner";
import ReactstrapTable from "./R054_ReactstrapTable";
import ReactstrapTab from "./R055_ReactstrapTab";
import Sweetalert2Basic from "./R056_Sweetalert2Basic";
import Sweetalert2Position from "./R057_Sweetalert2Position";
import Sweetalert2Confirm from "./R058_Sweetalert2Confirm";
import FetchGet from "./R059_FetchGet";
import FechPost from "./R60_FetchPost";
import AxiosGet from "./R061_AxiosGet";
import AxiosPost from "./R062_AxiosPost.js";
import CallBackFunc from "./R063_CallbackFunc.js";
import Promise from "./R064_Promise.js";
import R065_PromiseCatch from "./R065_PromiseCatch.js";
import ReactonClick from "./R066_onClikc.js";
import R067_onChange from "./R067_onChange.js";
import R068_onMouseMove from "./R068_onMouseMove";
import R069_onMouseOver from "./R069_onMouseOver";
import R070_onMouseOut from "./R070_onMouseOut";
import R071_Onkey from "./R071_Onkey.js";
import R072_onSubmit from "./R072_onSubmit.js";
import R073_ReactRef from "./R073_ReactRef.js";
import R074_ReactCurrying from "./R074_ReactCurrying.js";
import R075_ReactHoc from "./R075_ReactHoc.js";
import R076_컨텍스트api from "./R076_컨텍스트api.js";
function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R072_onSubmit />
      <R070_onMouseOut />
      <R071_Onkey />
      <R073_ReactRef />
      <R074_ReactCurrying />
      <R075_ReactHoc name="React200" />
      <R076_컨텍스트api></R076_컨텍스트api>
      {/* <R069_onMouseOver/> */}
      {/* <R067_onChange/>
      <ReactonClick/>
      <R068_onMouseMove/> */}
      {/* <ImportComponent></ImportComponent>
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
      <ReactHook/>
      <Fragment/>
      <ReturnMap/>
      <ReactstrapAlerts/>
      <ReactstrapBadges/>
      <ReactstrapBreadcrumbs/>
      <ReactstrapDropdown/>
      <ReactstrapButtonGroup/>
      <ReactstrapBottons/>
      <ReactstrapCard/>
      <ReactstrapCarousel/>
      <ReactstrapCollapse/>
      <ReactstrapFade/>
      <ReactstrapForm/>
        <InputGroup/> 
         <Jumbotron/> 
        <ListGroup/>
        <Modal/>
        <Navbar/>
        <Pagination/>
        <Popover/>
        <Progress/>
        <ReactstrapSpinner/>
        <ReactstrapTable/>
        <ReactstrapTab/>
      <Sweetalert2Basic/>
      <Sweetalert2Position/>
      <Sweetalert2Confirm/>
      <FetchGet/>
      <FechPost/>
      <AxiosGet/>
      <AxiosPost/>
      <CallBackFunc/>
      <Promise/> 
      <R065_PromiseCatch/>*/}
    </div>
  );
}

export default App;
