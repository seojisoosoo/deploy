import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
//axios.get이용

const StyledBlog = styled.button`
  background-color: skyblue;
  border: 0;
  border-radius: 20px;
  margin: 2vh;
  padding: 1vh;
  outline: 0;
  color: black;
  cursor: pointer;
  font-size: 30px;
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
    navigate(url, { state: { id: id, blogs: blogs[id - 1] } });
  };

  return (
    <>
      {blogs.map((blog, index) => (
        <div key={index}>
          <StyledBlog onClick={() => handleClick(`/${index}`, index)}>
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
