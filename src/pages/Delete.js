import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation, Navigate } from "react-router-dom";
//axios.delete이용

const Delete = () => {
  const { state } = useLocation();
  // fetch("http://127.0.0.1:8000/${state}", {
  //   method: "DELETE",
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log("error"));

  axios
    .delete(`http://127.0.0.1:8000/${state.id}/delete`)
    .then((response) => response.json())
    .catch(console.log("error"));
  return (
    <>
      <Navigate to="/" />
    </>
  );
};

export default Delete;
