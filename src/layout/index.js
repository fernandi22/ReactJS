import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../assets/theme/theme';

import SideBar from '../components/TemplateLayout/SideBar';

const { Content } = Layout;

class Container extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Layout
            style={{
              height: "100vh",
              width: "100vw",
              overflowX: "hidden",
            }}
          >
            <Layout>
              <SideBar />
              <Content>{this.props.children}</Content>
            </Layout>
          </Layout>
        </Router>
      </ThemeProvider>
    );
  }
};

export default Container;
