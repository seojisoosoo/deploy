import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import Delete from "./pages/Delete";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Blog />}>
          <Route path=":id" element={<Read />}></Route>
          <Route path=":id" element={<Update />}></Route>
        </Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/" element={<Delete />}></Route>
      </Routes>
    </>
  );
};

export default App;
