import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, resetCount } from "../slice/mainSlice";

export default function CounterApp() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleAddCount = () => {
    if (state.value >= 0) {
      dispatch(increament());
    }
  };

  const handleSubtractCount = () => {
    if (state.value > 0) {
      dispatch(decreament());
    }
  };

  const handleResetValue = () => {
    dispatch(resetCount());
  };

  useEffect(() => {
    handleSubtractCount();
    resetCount();
  }, []);

  return (
    <>
      <div className="bg-gray-900 w-full max-w-sm rounded-xl shadow-2xl mx-auto text-center p-8 space-y-6 mt-10">
        <h2 className="text-white text-2xl font-semibold">Counter App</h2>

        <div className="text-white flex flex-col gap-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium py-2 rounded-lg"
            onClick={handleAddCount}
          >
            ➕ Add
          </button>

          <button
            className="bg-red-600 hover:bg-red-700 transition-all text-white font-medium py-2 rounded-lg"
            onClick={handleSubtractCount}
          >
            ➖ Subtract
          </button>

          <button
            className="bg-gray-700 hover:bg-gray-800 transition-all text-white font-medium py-2 rounded-lg"
            onClick={handleResetValue}
          >
            🔁 Reset to 100
          </button>

          <div className="border border-blue-500 rounded-lg py-2 text-lg font-bold">
            Counter: <span className="text-blue-400">{state.value}</span>
          </div>
        </div>
      </div>
    </>
  );
}
