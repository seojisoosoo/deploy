import React from "react";
// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Read from "./Read";
const Blog = () => {
  return (
    <>
      <h1>Blog</h1>
      <button>
        <Link to="/create">글쓰기</Link>
      </button>
      <Read />
      {/* <Outlet /> */}
    </>
  );
};

export default Blog;
