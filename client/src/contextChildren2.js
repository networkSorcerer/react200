import React from "react";
import { Consumer } from "./R076_컨텍스트api";

class contextChildren2 extends React.Component {
  render() {
    return (
      <Consumer>
        {(contextvalue) => <h3>{`contextValue : ${contextvalue}`}</h3>}
      </Consumer>
    );
  }
}

export default contextChildren2;
