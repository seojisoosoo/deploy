import React, { useRef } from "react";
import axios from "axios";
// import axios from "axios";
//axios.post 이용
const Create = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(titleRef.current.value);
    console.log(writerRef.current.value);
    console.log(bodyRef.current.value);

    axios
      .post("http://127.0.0.1:8000/", {
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
  };

  const titleRef = useRef(null);
  const writerRef = useRef(null);
  const bodyRef = useRef(null);

  return (
    <>
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
    </>
  );
};

export default Create;
