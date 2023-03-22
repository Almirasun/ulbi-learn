import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import './styles/App.css'

const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Phyton', body: 'Description'},
    {id: 2, title: 'Phyton 2', body: 'Description'},
    {id: 3, title: 'Phyton 3', body: 'Description'},
  ])

  return (
    <div className="App">
      <PostList almira={posts} sagynbek={'Посты про JS'} />
      <PostList almira={posts2} sagynbek={'Посты про Phyton'} />
    </div>
  )
}

export default App;