import { useState , useContext} from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";
import Footer from "./Footer";
import { spinerLoading } from "../../../utils/shared/loading";
import routes from "../../../routes";
import React from "react";
import {userContext} from '../contextProvider'

const { Header: AntHeader, Content, Sider } = Layout;


const Main = (props: any) => {
  const [visible, setVisible] = useState(false);
  const UserContext = useContext(userContext);
  const [sidenavColor] = useState("#1890ff");
  const [sidenavType] = useState("transparent");

  const [fixed] = useState(false);
  
  const openDrawer = () => setVisible(!visible);

  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");


  return (
    <Layout
      className={` layout-dashboard ${
        UserContext.lang === "en" ||   UserContext.lang  === "ge"
          ? ""
          :   UserContext.lang  === "ar"
          ? "layout-dashboard-rtl"
          : ""
      }  ${pathname === "profile" ? "layout-profile" : ""} `}
    >
      <Drawer
        title={false}
        placement={
          UserContext.lang  === "en" ||   UserContext.lang  === "ge"
            ? "left"
            :  UserContext.lang  === "ar"
            ? "right"
            : "left"
        }
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key={
          UserContext.lang  === "en" ||   UserContext.lang  === "ge"
            ? "left"
            :   UserContext.lang  === "ar"
            ? "right"
            : "left"
        }
        width={250}
        className={`drawer-sidebar ${
          UserContext.lang  === "ar" ? "drawer-sidebar-rtl" : ""
        } `}
      >
        <Layout
          className={`layout-dashboard ${
            UserContext.lang === "ar"? "layout-dashboard-rtl" : ""
          }`}
        >
          <Sider
            trigger={null}
            width={250}
            theme="light"
            className={`sider-primary ant-layout-sider-primary ${
              sidenavType === "#fff" ? "active-route" : ""
            }`}
            style={{ background: sidenavType }}
          >
            <Sidenav color={sidenavColor} />
          </Sider>
        </Layout>
      </Drawer>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {}}
        trigger={null}
        width={250}
        theme="light"
        className={`sider-primary ant-layout-sider-primary ${
          sidenavType === "#fff" ? "active-route" : ""
        }`}
        style={{ background: sidenavType }}
      >
        <Sidenav color={sidenavColor} />
      </Sider>
      <Layout>
        {fixed ? (
          <Affix>
            <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
              <Header onPress={openDrawer} name={pathname} subName={pathname} />
            </AntHeader>
          </Affix>
        ) : (
          <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
            <Header onPress={openDrawer} name={pathname} subName={pathname} />
          </AntHeader>
        )}
        {}
        <Content className="content-ant">
          {
            <React.Suspense fallback={spinerLoading}>
              <Switch>
                {routes.map((route, idx) => {
                  return (
                    route.component && (
                      <Route
                        key={Math.random()*Math.random()}
                        path={route.path}
                        exact={route.exact}
                        render={(props: any) => <route.component {...props} />}
                      />
                    )
                  );
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </React.Suspense>
          }
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Main;
