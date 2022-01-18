import React from "react";
import Form from "./components/Form";
const App = () => {
  return (
    <div>
      <div className="bg-green-400 h-screen  flex items-center justify-center">
        <div
          className=" p-4 rounded-lg bg-white w-auto
         md:min-w-[800px] h-auto shadow-xl"
        >
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
