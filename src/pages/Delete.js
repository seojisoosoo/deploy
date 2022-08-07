import React from "react";
import { useEffect } from "react";
import axios from "axios";
//axios.delete이용

const Delete = () => {
  useEffect(() => {
    const deleteData = async () => {
      const response = await axios.delete("http://127.0.0.1:8000/");
      console.log(response);
    };
    deleteData();
  }, []);

  return <div>Delete</div>;
};

export default Delete;
