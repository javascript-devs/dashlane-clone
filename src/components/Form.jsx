import ToggleSwitch from "./ToggleSwitch";
import RangeBar from "./RangeBar";
import { useState } from "react";
import apiData from "./ApiHandler";
const Form = () => {
  const [res, setRes] = useState("");
  const reset = document.getElementById("reset");
  reset.addEventListener("click", () => {
    setRes("");
  });
  const handleSubmit = (e) => {
    setRes("fetching...");
    e.preventDefault();
    const data = new FormData(e.target);
    var object = {};
    data.forEach((value, key) => (object[key] = value));
    apiData(object).then((res) => {
      setRes(res);
      e.target.reset();
    });
  };

  return (
    <div className="flex w-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
        <input
          id="pwd"
          className=" w-auto border-0 border-b-2 border-green-500
           focus:border-green-700 ease-in-out duration-200 transition-all 
           outline-none py-2 text-xl text-green-600 "
          type="text"
          value={res}
          readOnly
        />
        <div className="flex flex-col">
          <RangeBar />
          <div className="flex md:items-baseline items-center justify-evenly flex-col md:flex-row space-y-4 md:space-x-6">
            <ToggleSwitch key="1" name="uppercase" text="Uppercase letters" />
            <ToggleSwitch key="2" name="numbers" text="Numbers" />
            <ToggleSwitch key="3" name="symbols" text="Symbols" />
          </div>
          <div className=" items-center justify-center flex pt-4 mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button id="reset" type="reset" className="btn btn-warning ml-4">
              Reset
            </button>
          </div>
          <p className="text-md mt-4">
            Made by:
            <a
              href="https://github.com/code-withAshish"
              className="font-bold hover:text-green-700"
            >
              Ashish
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
