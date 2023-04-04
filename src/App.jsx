import React, { useMemo, useState, useRef } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'
import MyInput from "./components/UI/input/MyInput";


const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Aaa', body: 'Description 1' },
    { id: 2, title: 'Bbb', body: 'Description 2' },
    { id: 3, title: 'Ccc', body: 'Description 3' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    
  }
  
  const sortedPosts = useMemo(() => {
    console.log('Функция отработала!');
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }  

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id)) // это проверка id`шников
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <MyInput 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={'Search...'}
        />
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={'Сортировка'} 
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}  
        />
      </div>

      {/* Условная отрисовка */}
      {sortedAndSearchedPosts.length !== 0
        ? 
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS' />
        : 
        <h1 style={{marginTop: '50px', textAlign: 'center'}}>Посты не были найдены...</h1>
      }
      
    </div>
  )
}


export default App;