import Counter from "./components/Counter";
import './styles/App.css'
import {useMemo, useState} from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'aa', body: 'aa'},
        {id: 2, title: 'bb', body: 'cc'},
        {id: 3, title: 'cc', body: 'dd'},
        {id: 4, title: 'dd', body: 'bb'}

    ])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''})

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter((p) => (p.id !== post.id
        )))
    }

    const sortedPosts= useMemo(()=>{
        console.log("----------Sorted function----------")
        if (filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    },[filter.sort, posts])

    const sortedAndSearchPosts = useMemo(()=>{
        return sortedPosts.filter((post)=> post.title.toLowerCase().includes(filter.query))
    }, [filter.query,sortedPosts])

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick = {() =>setModal(true)}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost}/>
            </MyModal>
            <Counter/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <Posts posts={sortedAndSearchPosts} remove={removePost} title="Some custom title"/>
        </div>
    );
}

export default App;
