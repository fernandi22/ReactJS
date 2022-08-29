import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import { I18nextProvider } from 'react-i18next';

import i18n from './helpers/i18next/i18n';
import store from './helpers/store/store';

import Container from './layout';
import './index.css';

import Home from './containers/Home';

const { Content } = Layout;

const AppIndex = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Container>
          <Switch>
            <Content
              style={{
                width: '100%',
              }}
            >
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
            </Content>
          </Switch>
        </Container>
      </Provider>
    </I18nextProvider>
  );
};

export default AppIndex;
