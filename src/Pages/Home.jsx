import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counterSlice";

function Home() {
  // const result = useSelector((state) => state.counter.value);
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleClick1 = () => {
    dispatch(increment());
  };
  const handleClick2 = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>count: {value}</h1>
      <button onClick={handleClick1} className="bg-blue-400 px-2">
        increment
      </button>
      <button onClick={handleClick2} className="bg-blue-400 px-2">
        decrement
      </button>
    </div>
  );
}

export default Home;
