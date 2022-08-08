import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ReadDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleClick = (url, id) => {
    navigate(url, { state: id });
  };

  return (
    <>
      <h1>{state.blogs.title}</h1>
      <p>작성자 | {state.blogs.writer}</p>
      <p>{state.blogs.body}</p>
      console.log(state.blogs.title)
      {/* update */}
      <button onClick={handleClick("/update", state.id)}>Update</button>
      {/* delete */}
      <button onClick={handleClick("/delete", state.id)}>Delete</button>
    </>
  );
};

export default ReadDetail;
