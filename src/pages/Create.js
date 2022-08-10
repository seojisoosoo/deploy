import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
//aimport { useHistory } from 'react-router';
//axios.post 이용
const Create = () => {
  let navigate = useNavigate();
  const onSubmit = (e) => {
    // e.preventDefault(); //새로고침x
    fetch("https://doingdjango.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
          alert("추가완료!");
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
      <input type="text" name="title" ref={titleRef} />
      <br />
      작성자:
      <input type="text" name="writer" ref={writerRef} />
      <br />
      본문:
      <textarea name="body" cols="30" rows="10" ref={bodyRef} />
      <br />
      <button type="submit" onClick={onSubmit}>
        submit
      </button>
    </form>
  );
};

export default Create;
