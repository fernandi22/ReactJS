import React, { Component } from 'react';
import { Layout } from 'antd';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';

import Logo from '../../../assets/images/SubMenu/foto.jpeg';

import './Sidebar.css'

const { Sider } = Layout;

class SideBar extends Component{
  render () {
    return (
      <I18nextProvider>
        <Sider
          data-test-id="sidebar-menu"
          width={255}
          style={{
            position: 'fixed',
            height: '100vh',
            left: 0,
            backgroundColor: '#555', //change color sidebar
            overflowY: 'auto',
            zIndex: 100,
          }}
        >
          <div style={{ textAlign: 'center', justifyContent: 'center', height: '100vh', padding: '50% 0' }}>
            <img
              style={{ height: '100px', width: '100px' }}
              src={Logo}
              alt="logo"
            />
            
            <div style={{ marginTop: '20px' }}>
              <a href="#home" className='button'>HOME</a>
              <br />
              <br />
              <a href="#about" className='button'>ABOUT</a>
              <br />
              <br />
              <a href="#experience" className='button'>EXPERIENCE</a>
              <br />
              <br />
              <a href="#interest" className='button'>INTEREST</a>
              <br />
              <br />
              <a href="#skill" className='button'>SKILL</a>
              <br />
              <br />
              <a href="#awards" className='button'>AWARDS</a>
              <br />
              <br />
            </div>
          </div>
          <Router>
          </Router>
        </Sider>
      </I18nextProvider>
    );
  }
};

export default SideBar;
