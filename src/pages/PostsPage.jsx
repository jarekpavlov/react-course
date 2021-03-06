import {useEffect, useRef, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../api/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/ui/button/MyButton";
import MyModal from "../components/ui/MyModal/MyModal";
import PostForm from "../components/PostForm";
import Counter from "../components/Counter";
import PostFilter from "../components/PostFilter";
import Posts from "../components/Posts";
import Pagination from "../Pagination";
import Loader from "../components/ui/loader/Loader";
import MySelect from "../components/ui/select/MySelect";
import {useObserver} from "../hooks/useObserver";


function PostsPage() {

    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()
    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        setTotalPages(getPageCount(response.headers['x-total-count'], limit))
    })
    useObserver(lastElement, page<totalPages, isPostLoading, ()=>{
        setPage(page+1)
    })

    const changePage = (page) => {
        setPage(page)
    }

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

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
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <Counter/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
                onChange={(value) => setLimit(value)}
                defaultValue='The quantity of elements'
                optionsList={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Show all'}
                ]}
            >

            </MySelect>
            {postError.length !== 0 &&
            <h1>Error appears {postError}</h1>}
            <Posts posts={sortedAndSearchPosts} remove={removePost} title="Some custom title"/>
            <div ref = {lastElement} style={{height: 20, background: 'lightgreen'}}/>
            {isPostLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default PostsPage;