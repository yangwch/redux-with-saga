import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const { user: { data, isLoading } } = useSelector(state => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'users/getUserByIdAction'})
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div className="profile">Hi, {data?.name}!</div>;
}

export default Profile;
