import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import './styles/App.css'

const App = () => {
  

  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}} />
    </div>
  )
}

export default App;