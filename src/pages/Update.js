import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//axios.put이용
const Update = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const onSubmit = (e) => {
    e.preventDefault(); //새로고침x

    fetch(`http://127.0.0.1:8000/${state.id}/update`, {
      method: "PUT",
      headers: {
        // "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        writer: writerRef.current.value,
        body: bodyRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.ok) {
          alert("수정완료!");
        }
      });
    navigate("/");
  };

  const titleRef = useRef(null);
  const writerRef = useRef(null);
  const bodyRef = useRef(null);
  return (
    <form>
      제목:
      <input
        type="text"
        name="title"
        defaultValue={state.detail.title}
        ref={titleRef}
      />
      <br />
      작성자:
      <input
        type="text"
        name="writer"
        defaultValue={state.detail.writer}
        ref={writerRef}
      />
      <br />
      본문:
      <textarea
        name="body"
        cols="30"
        rows="10"
        defaultValue={state.detail.body}
        ref={bodyRef}
      />
      <br />
      <button type="submit" onClick={onSubmit}>
        SAVE
      </button>
    </form>
  );
};

export default Update;
