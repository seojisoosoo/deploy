import React from "react";
// import { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
//axios.delete이용

const Delete = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  axios
    .delete(`https://doingdjango.herokuapp.com/${state.id}/delete`)
    .then((res) => res)
    .then((res) => {
      console.log("res받았다" + res);
      if (res.ok) {
        alert("삭제완료!");
      }
    })
    .catch(console.log("error"));
  navigate("/");
  return (
    <>
      <Navigate to="/" />
    </>
  );
};

export default Delete;
