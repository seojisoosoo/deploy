import React from "react";
import { useLocation } from "react-router-dom";

const ReadDetail = () => {
  const { state } = useLocation();

  return (
    <>
      <h1>{state.title}</h1>
      <p>작성자 | {state.writer}</p>
      <p>{state.body}</p>
    </>
  );
};

export default ReadDetail;
