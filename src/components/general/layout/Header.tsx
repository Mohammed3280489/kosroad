import { useState, useEffect, FC, useContext } from "react";
import {
  Row,
  Col,
  Breadcrumb,
  Button,
  Input,
  Drawer,
  Typography,
  Dropdown,
  Menu,
} from "antd";
import {
  StarOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { logsetting, setting, toggler } from "./icon";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { userContext } from "../contextProvider";
interface HeaderProps {
  placement?: () => void;
  onPress: () => void;
  name: string;
  subName: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { Title, Text } = Typography;
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const UserContext = useContext(userContext);
  const { t } = useTranslation();
  useEffect(() => window.scrollTo(0, 0));
  const [, , removeTokenCookies] = useCookies(["TOKEN"]);
  const showDrawer = () => setVisible(true);
  const hideDrawer = () => setVisible(false);

  const langMenu = (
    <Menu className={"menu"}>
      <Menu.Item
        key={1}
        onClick={() => {
          UserContext.setLang("en");
        }}
        className={UserContext.lang==='ar' ? 'arFont' : ''}
      >
        {UserContext.lang ==='ar' ? 'الانكليزية' : "English"}
      </Menu.Item>
      <Menu.Item
        key={2}
        onClick={() => {
          UserContext.setLang("ar");
        }}
        className={UserContext.lang==='ar' ? 'arFont' : ''}
      >
          {UserContext.lang ==='ar' ? 'العربية' : "Arabic"}
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="setting-drwer" onClick={showDrawer}>
        {setting}
      </div>
      <Row gutter={[24, 0]}>
        <Col
          span={24}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">{t("PAGES")}</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{props.name.replace("/", "")}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col
          span={24}
          md={18}
          className="header-control"
          style={{ display: "flex", gap: 10 }}
        >
          <Button type="link" onClick={showDrawer}>
            {logsetting}
          </Button>
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => props.onPress()}
          >
            {toggler}
          </Button>
          <Drawer
            className="settings-drawer"
            mask={true}
            width={360}
            onClose={hideDrawer}
            placement={"right"}
            visible={visible}
          >
            <div>
              <div className="header-top">
                <Title level={4}>
                  {t("CONFIGRATION")}
                  <Text className="subtitle">{t("ourdashboardoptions")}</Text>
                </Title>
              </div>

              <div className="sidebar-color">
                <div className="ant-docment">
                  <Button type="default" size="large">
                    SHOPS
                  </Button>
                  <Button size="large">ACCOUNTING SYSTEM</Button>
                </div>
                <div className="viewstar">
                  <a href="#pablo">{<StarOutlined />} Star</a>
                  <a href="#pablo"> 190</a>
                </div>
              </div>
            </div>
          </Drawer>
          <Dropdown overlay={langMenu} placement="bottomRight" >
            <GlobalOutlined style={{ fontSize: 8 , cursor:'pointer' }} />
          </Dropdown>
          <span
            onClick={() => {
              removeTokenCookies("TOKEN");
              history.push("/sgin-in");
            }}
            style={{ cursor: "pointer", width: 70 }}
          >
            {t("SIGNOUT")}
          </span>

          <Input
            className={`header-search ${UserContext.lang==='ar' && 'arFont'}`}
            placeholder={UserContext.lang ==='ar' ? 'البحث' : 'search'}
          
          />
        </Col>
      </Row>
    </>
  );
};

export default Header;
