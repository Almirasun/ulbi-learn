import React, { useMemo, useState, useRef, useEffect } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import PostService from "./API/PostService";

const App = () => {

  const [posts, setPosts] = useState([
    // { id: 1, title: 'Aaa', body: 'Description 1' },
    // { id: 2, title: 'Bbb', body: 'Description 2' },
    // { id: 3, title: 'Ccc', body: 'Description 3' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' }) // отвечает за логику состировки компонента
  const [modal, setModal] =  useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false  )
  }

  async function fetchPosts() {
    const posts = await PostService.getAll() // этот метод вернет список постов
    setPosts(posts);
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id)) // это проверка id`шников
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS' />
    </div>
  )
}


export default App;