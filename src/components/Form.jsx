import ToggleSwitch from "./ToggleSwitch";
import RangeBar from "./RangeBar";
import { useState } from "react";
import apiData from "./ApiHandler";
const Form = () => {
  const [res, setRes] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    var object = {};
    data.forEach((value, key) => (object[key] = value));
    apiData(object).then((res) => setRes(res));
    e.target.reset();
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
        <input
          className=" w-auto border-0 border-b-2 border-green-500
           focus:border-green-700 ease-in-out duration-200 transition-all 
           outline-none py-2 text-4xl text-green-600 "
          type="text"
          value={res}
          readOnly
        />
        <div className="flex flex-col">
          <RangeBar />
          <div className="flex items-center justify-evenly flex-col lg:flex-row lg:space-y-3 space-x-3">
            <ToggleSwitch key="1" name="uppercase" text="Uppercase letters" />
            <ToggleSwitch key="2" name="numbers" text="Numbers" />
            <ToggleSwitch key="3" name="symbols" text="Symbols" />
          </div>
          <div className=" items-center justify-center flex">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
