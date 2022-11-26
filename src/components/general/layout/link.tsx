import { NavLink } from "react-router-dom";
import {useContext} from 'react';
import {userContext} from '../contextProvider'
import { tables } from "./icon";
import { UseTranslation } from "../../../utils/shared/customHook/languages";

export const Vendor = () => {
  const { t  } = UseTranslation();
  const UserContext = useContext(userContext);
  return (
    <NavLink to="/tables/vendor">
      <div className="navLink" style={{ width: 135 }}>
        <span
          className="icon"
          style={{
            background: "",
          }}
        >
          {tables}
        </span>
        <span className={`label ${UserContext.lang  === 'ar' ? 'arFont' : ''}`} style={{ color: "black" }}  >
          {t("VENDOR")}
        </span>
      </div>
    </NavLink>
  );
};
export const VendorType = () => {
  const { t  } = UseTranslation();
  const UserContext = useContext(userContext);
  return (
    <NavLink to="/tables/vendorType">
      <div className="navLink" style={{ width: 135 }}>
        <span
          className="icon"
          style={{
            background: "",
          }}
        >
          {tables}
        </span>
        <span className={`label ${UserContext.lang === 'ar' ? 'arFont' : ''}`} style={{ color: "black" }}>
          {t("VENDORTYPE")}
        </span>
      </div>
    </NavLink>
  );
};

export const CompanyType = () => {
  const { t } = UseTranslation();
  const UserContext = useContext(userContext);
  return (
    <NavLink to="/tables/companyType">
      <div className="navLink" style={{ minWidth: 135 }}>
        <span
          className="icon"
          style={{
            background: "",
          }}
        >
          {tables}
        </span>
        <span className={`label ${UserContext.lang === 'ar' ? 'arFont' : ''}`} style={{ color: "black" }}>
          {t("COMPANYTYPE")}
        </span>
      </div>
    </NavLink>
  );
};

export const MemberShip = () => {
  const { t  } = UseTranslation();
  const UserContext = useContext(userContext);
  return (
    <NavLink to="/tables/memberShip">
      <div className="navLink" style={{ minWidth: 135 }}>
        <span
          className="icon"
          style={{
            background: "",
          }}
        >
          {tables}
        </span>
        <span className={`label ${UserContext.lang === 'ar' ? 'arFont' : ''}`}style={{ color: "black" }}>
          {t("MEMBERSHIP")}
        </span>
      </div>
    </NavLink>
  );
};
export const Countries = () => {
  const { t  } = UseTranslation();
  const UserContext = useContext(userContext);
  return (
    <NavLink to="/tables/countries">
      <div className="navLink" style={{ minWidth: 135 }}>
        <span
          className="icon"
          style={{
            background: "",
          }}
        >
          {tables}
        </span>
        <span className={`label ${UserContext.lang === 'ar' ? 'arFont' : ''}`} style={{ color: "black" }}>
          {t('COUNTRIES')}
        </span>
      </div>
    </NavLink>
  );
};
