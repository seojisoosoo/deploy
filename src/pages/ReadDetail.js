import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
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

  const deleted = () => {
    // fetch(`https://doingdjango.herokuapp.com/${state.id}/delete`, {
    //   method: "DELETE",
    // }).then((res) => {
    //   console.log(res.ok);
    //   if (res.ok) {
    //     alert("삭제완료!");
    //     navigate("/");
    //   }
    // });
    axios
      .delete(`https://doingdjango.herokuapp.com/${state.id}/delete`)
      .then((res) => {
        if (res.data.ok) {
          alert("삭제완료!");
          navigate("/");
        }
      });
  };

  return (
    <>
      <h1>{detail.title}</h1>
      <p>작성자 | {detail.writer}</p>
      <p>{detail.body}</p>
      <button onClick={() => buttonClick(`/${detail.id}/update`, detail.id)}>
        Update
      </button>
      <button onClick={deleted}>Delete</button>
    </>
  );
};

export default ReadDetail;
