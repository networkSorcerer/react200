import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class R055_ReactstrapTab extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      TabState: '1' // 초기 TabState 설정
    };
  }

  toggle = (tabnum) => {
    if (this.state.TabState !== tabnum) {
      this.setState({ TabState: tabnum });
    }
  }

  render() {
    return (
      <>
        <Nav tabs>
          <NavItem>
            <NavLink onClick={() => { this.toggle('1'); }}>First Tab</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => { this.toggle('2'); }}>Second Tab</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.TabState}>
          <TabPane tabId="1"><h3>React</h3></TabPane>
          <TabPane tabId="2"><h3>200</h3></TabPane>
        </TabContent>
      </>
    );
  }
}

export default R055_ReactstrapTab;
