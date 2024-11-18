import React from "react";
import ContextChild from "./contextChild"; // 파일명 확인 후 정확히 수정

const { Provider, Consumer } = React.createContext();
export { Consumer };

class R077_ContextApi extends React.Component {
  constructor(props) {
    super(props);
    // 초기 상태 정의
    this.state = {
      name: "defaultName", // 초기 값 설정
    };
    this.setStateFunc = this.setStateFunc.bind(this);
  }

  setStateFunc(value) {
    this.setState({ name: value });
  }

  render() {
    const content = {
      ...this.state, // this.state가 undefined가 아니도록 초기화된 상태를 사용
      setStateFunc: this.setStateFunc,
    };
    return (
      <Provider value={content}>
        <ContextChild /> {/* 닫는 태그 수정 */}
      </Provider>
    );
  }
}

export default R077_ContextApi;
