import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <button>
        <Link to="/create">글쓰기</Link>
      </button>
      <Outlet />
    </>
  );
};

export default Blog;
