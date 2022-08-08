import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
//axios.delete이용

const Delete = () => {
  const { state } = useLocation();

  // useEffect(() => {
  //   const deleteData = async (index) => {
  //     const response = await axios.delete("http://127.0.0.1:8000/${state}");
  //     console.log(response);
  //   };
  //   deletDate();
  // }, []);

  return <></>;
};

export default Delete;
