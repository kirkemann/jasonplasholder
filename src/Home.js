import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState({});
  // når component render, re-render
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {

      console.log("AXIOS", res.data.slice(0, 10));
      const response = res.data.slice(0, 10);
      setPosts(response);
    });

  }, []);

  let postList = "";

  if (posts.length > 0) {
    postList = posts.map(p => {
      return (

       
        <Link to={"/" + p.id} key={p.id}>
          <h1>Title: {p.title}</h1>
        </Link>
      );
    });
  }

  return(
<div>{postList}</div>
  )
}

export default Home
