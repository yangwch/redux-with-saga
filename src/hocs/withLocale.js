import { IntlProvider } from "react-intl";
import '@formatjs/intl-locale/polyfill'

import { getMessages } from "../locales";
import { getLanguage } from "../utils/util";


const withLocale = Component => props => {
  const locale = getLanguage();
  const messages = getMessages(locale);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...props} />
    </IntlProvider>
  );
};

export default withLocale;
