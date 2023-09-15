
// export default Main;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, valueByInput } from "../Store/count/userSlice";
import { NavLink } from "react-router-dom";

const Main = () => {
  const [value, setvalue] = useState();
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // Update count whenever the input value changes
  const handleInputChange = (e) => {
    setvalue(e.target.value);
    dispatch(valueByInput(Number(e.target.value)));
  };

  return (
    <section className="flex bg-gray-500 justify-center  ">
      <div className="bg-orange-200 m-56">
        <h1 className=" mx-24 py-2 font-bold text-xl">Fetch pokemon Api</h1>

        <div className="flex gap-2 mx-2">
          <button
            className="bg-blue-500 hover:bg-blue-800 hover:text-white p-2"
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
          <input
            className="border hover:border-black  border-2"
            type="text"
            placeholder="please enter the number.."
            value={value}
            onChange={handleInputChange}
          />
          <button
            className="bg-red-500 hover:bg-red-800 hover:text-white p-2"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <div className="flex justify-between mx-36">
          <NavLink to="pokemon">
            <button className="bg-green-500 px-4 hover:bg-blue-800 hover:text-white py-5 my-2">
              Click Me!!
            </button>
          </NavLink>
        </div>
        <p className="text-blue-500 mx-[165px]">count: {count}</p>
      </div>
    </section>
  );
};

export default Main;
