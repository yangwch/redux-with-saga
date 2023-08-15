import { IntlProvider } from "react-intl";
import '@formatjs/intl-locale/polyfill'
import { getMessages } from "../locales";
import { getQueryString } from "../utils/util";


const withLocale = Component => props => {
  const locale = getQueryString("lang") || "zh-CN";
  const messages = getMessages(locale);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...props} />
    </IntlProvider>
  );
};

export default withLocale;
