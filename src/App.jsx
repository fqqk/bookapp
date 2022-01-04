import * as React from "react";
import "./style/App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

//コンポーネントのimport
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";

//関数コンポーネントはJSXを返す関数

export const App = () => {
  return (
    <div>
      <h1>hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Link to="/">Back To Top</Link>
      </BrowserRouter>
    </div>
  );
};
