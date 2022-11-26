import { Menu, Button } from "antd";
import { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { userContext } from "../contextProvider";

import { billing, dashboard, profile } from "./icon";
import { CompanyType, Countries, MemberShip, Vendor, VendorType } from "./link";
interface SideparInterface {
  color: any;
}

const Sidenav: FC<SideparInterface> = (props) => {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");
  const UserContext = useContext(userContext);
  const { t } = useTranslation();
  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span className={` ${UserContext.lang === "ar" ? "arFont" : ""}`}>
          {t("SHOPDASHBOARD")}
        </span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span
              className="icon"
              style={{
                background: page === "dashboard" ? props.color : "",
              }}
            >
              {dashboard}
            </span>
            <span
              className={`label ${UserContext.lang === "ar" ? "arFont" : ""}`}
            >
              {t("DASHBOARD")}
            </span>
          </NavLink>
        </Menu.Item>

        <Menu.Item
          className={`menu-item-header  ${
            UserContext.lang === "ar" ? "arFont" : ""
          }`}
          key="9"
        >
          {t("TABLEPAGES")}
        </Menu.Item>

        <Menu.Item key="2">
          <Vendor />
        </Menu.Item>

        <Menu.Item key="3">
          <VendorType />
        </Menu.Item>

        <Menu.Item key="4">
          <CompanyType />
        </Menu.Item>
        <Menu.Item key="5">
          <MemberShip />
        </Menu.Item>
        <Menu.Item key="12">
          <Countries />
        </Menu.Item>

        <Menu.Item
          className={`menu-item-header  ${
            UserContext.lang === "ar" ? "arFont" : ""
          }`}
          key="10"
        >
          {t("ORDERPAGES")}
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/pages/orders">
            <span
              className="icon"
              style={{
                background: page === "billing" ? props.color : "",
              }}
            >
              {billing}
            </span>
            <span
              className={`label ${UserContext.lang === "ar" ? "arFont" : ""}`}
            >
              {t("ORDER")}
            </span>
          </NavLink>
        </Menu.Item>

        <Menu.Item
          className={`menu-item-header  ${
            UserContext.lang === "ar" ? "arFont" : ""
          }`}
          key="7"
        >
          {t("ACCOUNTPAGES")}
        </Menu.Item>
        <Menu.Item key="16">
          <NavLink to="/pages/profile">
            <span
              className="icon"
              style={{
                background: page === "profile" ? props.color : "",
              }}
            >
              {profile}
            </span>
            <span
              className={`label ${UserContext.lang === "ar" ? "arFont" : ""}`}
            >
              {t("PROFILE")}
            </span>
          </NavLink>
        </Menu.Item>
      </Menu>
      <div className="aside-footer">
        <div
          className="footer-box"
          style={{
            background: props.color,
          }}
        >
          <span className="icon">{dashboard}</span>
          <h6
            className={` ${UserContext.lang === "ar" ? "arFont" : ""}`}
            style={{ fontWeight: 400 }}
          >
            {t("EmixDashboard")}
          </h6>
          <p
            className={` ${UserContext.lang === "ar" ? "arFont" : ""}`}
            style={{ fontWeight: 400 }}
          >
            {t("E-commerceapplication")}
          </p>
          <Button
            type="primary"
            className={`ant-btn-sm ant-btn-block ${
              UserContext.lang === "ar" ? "arFont" : ""
            }`}
          >
            {t("WEBSITE")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
