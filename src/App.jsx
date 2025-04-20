import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          AI Image Enhancer
        </h1>
        <p className="text-lg text-gray-500">
          Upload Your Image And Let AI Enhance It In A Second!!
        </p>
      </div>
      <Home />
      <div className="text-sm text-gray-500 mt-6">Powered By Panda.AI</div>
    </div>
  );
}

export default App;
