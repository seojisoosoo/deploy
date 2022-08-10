import React from "react";
// import { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
//axios.delete이용

const Delete = () => {
  // const navigate = useNavigate();
  const { state } = useLocation();
  // const onSubmit = () => {
  axios.delete(`http://127.0.0.1:8000/${state.id}/delete`);
  // .then((res) => res)
  // .then((res) => {
  //   console.log("res받았다" + res);
  //   if (res.ok) {
  //     alert("삭제완료!");
  //   }
  // });
  // .catch(console.log("error"));
  //   navigate("/");
  // };
  // let returnValue = window.confirm("정말 삭제하시겠어요?");
  // console.log(1);
  return (
    <>
      {/* {returnValue ? onSubmit() : navigate("/")} */}
      <Navigate to="/" />
    </>
  );
};

export default Delete;
