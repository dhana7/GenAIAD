import React, { useState } from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import { Input } from "antd";
import { SettingOutlined, SendOutlined } from "@ant-design/icons";
import { AtomSpinner, BreedingRhombusSpinner } from "react-epic-spinners";
import Enlive from "../images/Enlive.png";
import logo from "../images/logo.png";
import { Layout, Menu, Button, theme, Avatar, Dropdown, Space, Card } from "antd";
import { Col, Row } from "antd";
import { Brx } from "../services";

const { Header, Sider, Content } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const Landing = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [promptState, setPromptState] = useState("");
  const [displayImage, setDisplayImage] = useState([]);
  const [inputState, setInputState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getStarted,setGetStarted] = useState(true);

  const handleInput = (e) => {
    //   if (e.key === 'Enter') {
    //     console.log("Enter key pressed! Input value:", e.target.value);
    // };
  };

  const handlePrompt = (e) => {
    setPromptState(e.target.value);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const userMenu = (
    <Menu>
      <Menu.Item key="0">Profile</Menu.Item>
      <Menu.Item key="1">Logout</Menu.Item>
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
    <Layout className="d-flex vh-100">
      <Sider
        trigger={null}
        className="bg-primary"
        collapsible
        collapsed={collapsed}
      >
        <Row>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
            className="text-white"
          />
        </Row>
        <Row>
          <Col
            span={!collapsed ? 8 : 24}
            className="d-flex justify-content-center align-items-center"
          >
            <img className="main-logo" src={logo} />
          </Col>
          {!collapsed && (
            <Col
              className="d-flex justify-content-center align-items-center"
              span={12}
            >
              <img className="demo-logo-vertical" src={Enlive} />
            </Col>
          )}
        </Row>
        <Row className="h-75 d-block" style={{
              overflow: 'auto'
            }}>
          <Menu
            theme=""
            mode="inline"
            className="bg-primary"
            defaultSelectedKeys={["1"]}
            
            items={[
              getItem("Find templates", "sub1", <SettingOutlined />, [
                getItem("Food", "7"),
                getItem("Education", "8"),
                getItem("Technology", "9"),
                getItem("Bussiness", "10"),
                getItem("Welness", "10"),
                getItem("Sports", "10"),
              ]),
              getItem("Previous creations", "sub2", <SettingOutlined />, [
                getItem("Get past 7 days", "sub3", <SettingOutlined />, [
                  getItem("Bakery shop", "8"),
                  getItem("Shop improvement", "9"),
                ]),
                getItem("Get past 30 days", "sub4", <SettingOutlined />, [
                  getItem("Media for bakery", "8"),
                  getItem("My shop", "9"),
                ]),
              ]),
              // getItem('Past 7 days', 'sub2', <SettingOutlined />, [ ]),
            ]}
          />
          {/* <Row><div className=''>Get past</div></Row> */}
        </Row>
      </Sider>
      <Layout className="bg-primary">
        {/* <Header
          style={{
            padding: 0,
            // background: colorBgContainer,
          }}
          className='bg-primary'
        >
     
        </Header> */}

        <Content
          className="h-100 d-flex"
          style={{
            margin: "24px 16px",
            padding: 24,
            // minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          { getStarted &&
          <>
          <div className="z-3 d-flex w-100 h-100 justify-content-center align-items-center">
            <Card className="shadow-lg tagline">
            <Row>
          Boost your ads with NextGenAds: AI-powered precision for unmatched success.
          </Row>
          <Row className="d-flex align-items-center justify-content-center mt-3">
          Click Here to<Button
                type="primary"
                className="bg-primary ms-1 d-flex justify-content-center align-items-center "
                onClick={() => setGetStarted(false)}>

                  Get Started
                </Button>
          </Row>
          </Card>
          </div>
          </>
}
          
            {inputState.length > 0 && (
              inputState.map((input, index) => (
              <>
                <Row
            className="h-100 w-100 d-flex justify-content-end mb-4"
            align="bottom"
          >
                  <Col className="mb-3">
                    <div className="message-user tagline">
                      {input} : User{" "}
                      <Avatar className="bg-primary border-white">
                        <UserOutlined />
                      </Avatar>
                    </div>
                  </Col>
                

                <Col
                  span={8}
                  className="d-flex w-100 align-content-between me-auto"
                >
                   { displayImage[index] &&
                      <>
                        <div className="w-50 d-flex message-ai tagline">
                          <Avatar>
                            <UserOutlined />
                          </Avatar>
                          AI :
                        </div>
                        <Image width={200} src={displayImage[index]} />{" "}
                      </>
            }
                     
                </Col>
                </Row>
              </>
            ))
             
            )}
          
          {loading && 
            <Row>
            <Col
            span={24}
            className="d-flex w-100 align-content-between align-item-center ms-5 mb-5"
          >
                      <div className="d-flex h-100 justify-content-center align-items-center">
                        <BreedingRhombusSpinner size={"50"} color="#5000A0" />
                      </div> 
                      </Col>
                      </Row>
                    }
          <Row align={"bottom"} className="position-fixed w-81 d-flex h-88 justify-content-end">
            <Space.Compact className="w-100 d-flex">
              <Input
                value={promptState}
                onChange={handlePrompt}
                onKeyPress={handleInput}
                defaultValue="Combine input and button"
                placeholder="Enter your prompt here (eg: Create a hackathon poster)"
                disabled = {getStarted}
              />
              <Button
                type="primary"
                disabled = {getStarted}
                className="bg-primary d-flex justify-content-center align-items-center "
                onClick={() => {
                  setLoading(true);
                  var temTxt = [];
                  if (inputState.length > 0) {
                    temTxt = inputState;
                  }
                  console.log("prompt", temTxt, promptState);
                  temTxt.push(promptState);
                  setInputState(temTxt);
                  setPromptState("");
                  Brx(promptState).then((data) => {
                    console.log("data", data);
                    setLoading(false);
                    var temImg = [];
                    if (displayImage.length > 0) {
                      temImg = displayImage;
                    }
                    temImg.push(data);
                    setDisplayImage(temImg);
                    console.log(displayImage);
                  });
                }}
              >
                <SendOutlined />
              </Button>
            </Space.Compact>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Landing;
