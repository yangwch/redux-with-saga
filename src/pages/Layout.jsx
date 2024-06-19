import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getLanguage, setLang } from "../utils/util";
import { useIntl } from "react-intl";

function Layout() {
  const [language, setLanguage] = React.useState(getLanguage());

  const onChangeLanguage = e => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    setLang(newLanguage);
    window.location.reload();
  };

  const intl = useIntl();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              {intl.formatMessage({
                id: "page.home",
              })}
            </Link>
          </li>
          <li>
            <Link to="/about">
              {intl.formatMessage({
                id: "page.about",
              })}
            </Link>
          </li>
        </ul>

        <select name="language" value={language} onChange={onChangeLanguage}>
          <option value="en-US">English</option>
          <option value="zh-CN">中文</option>
        </select>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Layout;
