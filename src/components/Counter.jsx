import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const { current } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "counter/increment" })}>+</button>
      {current}
      <button onClick={() => dispatch({ type: "counter/decrement" })}>-</button>
    </div>
  );
}
