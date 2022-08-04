import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//axios.get이용
const Read = () => {
  const [blogs, setBlogs] = useState([]);
  const navgate = useNavigate();

  const handleClick = () => {};
  return (
    <>
      {blogs.map((blog) => (
        <div onClick={() => handleClick(`/${blog.memId}`, blog.memId)}>
          {blog.name}
        </div>
      ))}
    </>
  );
};

export default Read;
