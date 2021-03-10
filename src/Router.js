import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './Components/Navbar';
import * as Page from './Pages';

const Main = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  padding-left: 300px;
  width: 100%;
`;

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Route path="/" component={Navbar} />
          <Wrapper>
            <Switch>
              <Route exact path="/scenicSpot" render={(props) => (
                <Page.ScenicSpot {...props} all={true} />
              )}/>
              <Route exact path="/scenicSpot/:city" component={Page.ScenicSpot} />
            </Switch>
          </Wrapper>
        </Main>
      </BrowserRouter>
    );
  }
}

export default Router;
