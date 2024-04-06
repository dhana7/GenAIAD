import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';
import {
    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    MailOutlined,
    SettingOutlined, SearchOutlined
  } from '@ant-design/icons';
  import Enlive from '../images/Enlive.png';
  import logo from '../images/logo.png'
import { Layout, Menu, Button, theme, Avatar, Dropdown  } from 'antd';
import { Col, Row } from 'antd';
const { Header, Sider, Content } = Layout;
const Landing = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const userMenu = (
    <Menu>
      <Menu.Item key="0">
        Profile
      </Menu.Item>
      <Menu.Item key="1">
        Logout
      </Menu.Item>
    </Menu>
  );

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
      
    };
  }
  return (
    <Layout className='d-flex vh-100' >

      <Sider trigger={null} className='bg-primary' collapsible collapsed={collapsed}>
        <Row>
      <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
            className='text-white'
          />
          </Row>
          <Row>
        <Col span={!collapsed ?8 :24} className='d-flex justify-content-center align-items-center' ><img className='main-logo' src={logo} /></Col>{!collapsed &&<Col className='d-flex justify-content-center align-items-center' span={12} ><img className="demo-logo-vertical" src={Enlive}/></Col> }
        </Row>
        <Row className='h-75 d-block'>
        <Menu
        theme=''
          mode="inline"
          className='bg-primary'
          defaultSelectedKeys={['1']}
          items={[
            getItem('Navigation Three', 'sub2', <SettingOutlined />, [
                getItem('Option 7', '7'),
                getItem('Option 8', '8'),
                getItem('Option 9', '9'),
                getItem('Option 10', '10'),
              ]),
              getItem('Navigation Three', 'sub2', <SettingOutlined />, [
                getItem('Option 7', '7'),
                getItem('Option 8', '8'),
                getItem('Option 9', '9'),
                getItem('Option 10', '10'),
              ])
          ]}
        />
        </Row>
        <Row>
        <Dropdown overlay={userMenu} trigger={['click']}>
            <Button ghost className="bg-transparent border-0 text-white w-auto" onClick={e => e.preventDefault()}>

              <Avatar className='m-2 bg-transparent border-white' icon={<UserOutlined />} /> {!collapsed && "John Doe"}
            </Button>
          </Dropdown>
          </Row>
      </Sider>
      <Layout className='bg-primary'>
        {/* <Header
          style={{
            padding: 0,
            // background: colorBgContainer,
          }}
          className='bg-primary'
        >
     
        </Header> */}
        <Content
        className='h-100'
          style={{
            margin: '24px 16px',
            padding: 24,
            // minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            
          }}
        >
            <Row>

         <Input placeholder="Basic usage" />
         </Row>
        </Content>
      </Layout>
      
    </Layout>
    
  );
};
export default Landing;