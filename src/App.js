import React from "react";
import Form from "./components/Form";
const App = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <div className="p-4 rounded-lg bg-white h-auto w-max shadow-xl">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
