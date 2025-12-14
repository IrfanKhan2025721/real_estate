import React from "react";
import Nav from "./Components/NavBar/Nav";

function App() {
  return (
    <>
      <div className="bg-blue-500 flex justify-center p-5 m-5 rounded-full">
        <h1 className="text-xl font-semibold text-white">
          Real Estate Project
        </h1>
      </div>
      <Nav />
    </>
  );
}

export default App;
