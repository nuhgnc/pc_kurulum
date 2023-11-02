import axios, {isCancel, AxiosError} from 'axios';
import React from "react";
import { useState } from 'react'
import './App.css'


function App() {
  const baseURL = "http://127.0.0.1:3000/";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.post(baseURL).then((response) => {
      setPost(response.data.value);
    });
  }, []);

  if (!post) return null;
  
  return (
    <div>
      {console.log(post)}

      <div className="col">
      {post.map(home => <div key={Math.random()} >{home.value}</div>)}
    </div>
  
    </div>
  );
}

export default App
