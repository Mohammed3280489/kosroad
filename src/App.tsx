import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "./i18n";
import { useCookies } from "react-cookie";
import React from "react";

const ContextProvider = React.lazy(
  () => import("./components/general/contextProvider")
);

function App() {

  const [tokenCookies] = useCookies(["TOKEN"]);



  return (
    <div className="App">
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
        {tokenCookies.TOKEN !== null && tokenCookies.TOKEN !== undefined && (
          <Route path="/" component={ContextProvider} />
        )}
        <Redirect from="*" to="/sign-in" />
      </Switch>
    </div>
  );
}

export default App;
