import React from "react";

const vendorType = React.lazy(() => import("./components/vendorTypes"));
const companyType = React.lazy(() => import("./components/companyTypes"));
const memberShip = React.lazy(() => import("./components/memberShips"));
const countries = React.lazy(() => import("./components/countries"));
const profile = React.lazy(() => import("./pages/Profile"));
const home = React.lazy(() => import("./pages/Home"));
const orders = React.lazy(() => import("./pages/Billing"));
const vendor = React.lazy(()=> import("./components/vendors"));
const routes = [
  { path: "/", exact: true, name: "dashboard" },
  { path: "/dashboard", exact: true, name: "dashboard", component: home },
 
  {
    path: "/tables/vendorType",
    exact: true,
    name: "Vendor type",
    component: vendorType,
  },
  {
    path: "/tables/vendor",
    exact: true,
    name: "Vendor type",
    component: vendor,
  },
  {
    path: "/tables/companyType",
    exact: true,
    name: "comany type",
    component: companyType,
  },
  {
    path: "/tables/memberShip",
    exact: true,
    name: "comany type",
    component: memberShip,
  },
  {
    path: "/tables/countries",
    exact: true,
    name: "countries",
    component: countries,
  },
  {
    path: "/pages/profile",
    exact: true,
    name: "profile",
    component: profile,
  },
  {
    path: "/pages/orders",
    exact: true,
    name: "orders",
    component: orders,
  }
];

export default routes;
