import React from "react";
import { useIntl } from "react-intl";

export default function Loading() {
  const intl = useIntl();
  return <p>{intl.formatMessage({ id: "loading" })}</p>;
}
