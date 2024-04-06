import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import HeaderCustom from './components/HeaderCustom';
import ClubTable from './views/ClubTable';
import Home from './views/Home';
const { Content, Footer, Sider } = Layout;


function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <HeaderCustom />
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%' }}>
              <Menu.Item key="1">
                <a href="/clubs">Clubs</a>
              </Menu.Item>
              <Menu.Item key="2">
                <a href="/members">Members</a>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            <Router>
              <Routes>

                <Route path='' element={<Home />} />
                <Route path='/clubs' element={<ClubTable />}></Route>
              </Routes>

            </Router>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Club Management ©{new Date().getFullYear()} Created By Mr Lazy
      </Footer>
    </Layout>
  );
}

export default App;
