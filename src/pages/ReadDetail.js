import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ReadDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const buttonClick = (url, id) => {
    navigate(url, { state: { id: id, blogs: state.blogs } });
    console.log("good");
    console.log(state.id);
  };

  return (
    <>
      <h1>{state.blogs.title}</h1>
      <p>작성자 | {state.blogs.writer}</p>
      <p>{state.blogs.body}</p>

      {/* update */}
      <button onClick={() => buttonClick(`/${state.id}/update`, state.id)}>
        Update
      </button>

      {/* delete */}
      <button onClick={() => buttonClick(`/${state.id}/delete`, state.id)}>
        Delete
      </button>
    </>
  );
};

export default ReadDetail;
