import React from "react";
import { useIntl } from "react-intl";

import Counter from "../components/Counter";

export default function About() {
  const intl = useIntl();
  return (
    <div>
      {intl.formatMessage({ id: "page.about" })}
      <Counter />
    </div>
  );
}
