import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ReadDetail = () => {
  const { state } = useLocation();
  const id = state.id;
  const detail = state.blogs.filter((blog) => blog.id === id)[0];
  const navigate = useNavigate();
  const buttonClick = (url, id) => {
    navigate(url, { state: { id: id, detail: detail } });
  };
  console.log("내용");
  console.log(detail);

  return (
    <>
      <h1>{detail.title}</h1>
      <p>작성자 | {detail.writer}</p>
      <p>{detail.body}</p>
      <button onClick={() => buttonClick(`/${detail.id}/update`, detail.id)}>
        Update
      </button>
      <button onClick={() => buttonClick(`/${detail.id}/delete`, detail.id)}>
        Delete
      </button>
    </>
  );
};

export default ReadDetail;
