import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
//axios.get이용

const StyledBlog = styled.button`
  border: 1px solid black;
  background-color: white;
  border-radius: 20px;
  margin: 1vh 0vh;
  padding: 1vh;
  outline: 0;
  color: black;
  cursor: pointer;
  font-size: 20px;
`;
const Read = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:8000/");
      setBlogs(response.data.data);
      console.log("success");
    };
    fetchData();
  }, []);

  if (!blogs) {
    return null;
  }
  const handleClick = (url, id) => {
    // navigate(url, { state: { id: id, blogs: blogs[id] } });
    navigate(url, { state: { id: id, blogs: blogs } });

    console.log(blogs[id]);
  };
  return (
    <>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <StyledBlog onClick={() => handleClick(`/${blog.id}`, blog.id)}>
            {blog.title}
          </StyledBlog>
        </div>
      ))}
      <button>
        <Link to="/create">글쓰기</Link>
      </button>
    </>
  );
};

export default Read;
