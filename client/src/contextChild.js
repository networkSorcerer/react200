import React from "react";
import { Consumer } from "./R077_ContextApi";

class ContextChild extends React.Component {
  render() {
    return (
      <Consumer>
        {(contextValue) => (
          <button onClick={() => contextValue.setStateFunc("react200")}>
            {contextValue.name}
          </button>
        )}
      </Consumer>
    );
  }
}
export default ContextChild;
