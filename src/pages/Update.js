import React from "react";
import { useLocation } from "react-router-dom";
//axios.put이용
const Update = () => {
  const { state } = useLocation();

  // fetch("http://127.0.0.1:8000/{state}",{
  //   method:'PUT',
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body : JSON.stringify({
  //     ...
  //   })
  // })

  // return <button onClick={updateData(state)}>SAVE</button>;
};

export default Update;
