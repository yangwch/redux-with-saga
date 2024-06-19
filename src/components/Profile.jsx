import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

function Profile() {
  const {
    user: { data, isLoading },
  } = useSelector(state => state.users);
  // locales intl
  const intl = useIntl();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "users/getUserByIdAction" });
  }, [dispatch]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="profile">
      <div>
        {intl.formatMessage({
          id: "nps.question",
          defaultMessage: "是否满意？",
        })}
      </div>
      Hi, {data?.name}!
    </div>
  );
}

export default Profile;
