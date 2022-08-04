import React, { useEffect, useState } from "react";

//axios.post 이용
const Create = () => {
  //   const [blogs, setBlogs] = useState([]);

  //   useEffect(() => {
  //     axios.post("#")

  //     setBlog(data)

  //   }, [blog]);

  return (
    <>
      제목:
      <input type="text" name="title" />
      <br />
      작성자:
      <input type="text" name="writer" />
      <br />
      본문:<textarea name="body" id="contents" cols="30" rows="10"></textarea>
      <br />
      <button type="submit">submit</button>
    </>
  );
};

export default Create;
