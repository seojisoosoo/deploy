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

  // const a = useParams();
  // const nickname = a.nickname;
  // const who = data.members.filter((member) => member.nickname === nickname)[0];
  // console.log(who);
  //      <div>about {who.name}</div>
  return (
    <>
      {/* <h1>{state.blogs.title}</h1>
      <p>작성자 | {state.blogs.writer}</p>
      <p>{state.blogs.body}</p> */}

      {/* update */}
      {/* <button
        onClick={() => buttonClick(`/${state.blogs.id}/update`, state.blogs.id)}
      >
        Update
      </button> */}

      {/* delete */}
      {/* <button
        onClick={() => buttonClick(`/${state.blogs.id}/delete`, state.blogs.id)}
      >
        Delete
      </button>
 */}
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
