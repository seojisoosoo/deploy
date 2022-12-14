import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "./pages/Update";
import ReadDetail from "./pages/ReadDetail";
import styled from "styled-components";

const Dom = styled.div`
  display: flex;
`;
const Button = styled.button`
  height: 25px;
  margin: 30px 0px 0px 10px;
  cursor: pointer;
`;
const App = () => {
  const navigate = useNavigate();
  const homeClick = () => {
    navigate("/");
  };

  return (
    <>
      <Dom>
        <h1>Blog</h1>
        <Button onClick={homeClick}>Home</Button>
      </Dom>

      <Routes>
        <Route path="/" element={<Read />}></Route>
        <Route path="/:id" element={<ReadDetail />}></Route>
        <Route path="/:id/update" element={<Update />} />
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </>
  );
};

export default App;
