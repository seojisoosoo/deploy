import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import ReadDetail from "./pages/ReadDetail";

const App = () => {
  return (
    <>
      <h1>Blog</h1>

      <Routes>
        {/* <Route path="/" element={<Blog />}></Route> */}
        <Route path="/" element={<Read />}></Route>
        <Route path="/:id" element={<ReadDetail />}>
          <Route path="update" element={<Update />} />
          <Route path="delete" element={<Delete />} />
        </Route>

        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </>
  );
};

export default App;
