import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/Home";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    
    
  ]);

  return (
    <> 
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;