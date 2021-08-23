import Counter from "./components/Counter";
import './styles/App.css'
import {useEffect, useState} from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount} from "./utils/pages";


function App() {

    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const  [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostLoading, postError] = useFetching(async ()=>{
        const response = await PostService.getAll(limit,page)
        setPosts(response.data)
        setTotalPages(getPageCount(response.headers['x-total-count'], limit))
    })
    useEffect(() => {
        fetchPosts()
    }, [filter])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter((p) => (p.id !== post.id
        )))
    }
    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick = {() =>setModal(true)}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost}/>
            </MyModal>
            <Counter/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError.length !==0 &&
                <h1>Error appears {postError}</h1>}
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent:'center', marginTop: 50}}><Loader/></div>
                : <Posts posts={sortedAndSearchPosts} remove={removePost} title="Some custom title"/>}

        </div>
    );
}

export default App;
