import Counter from "./components/Counter";
import './styles/App.css'
import {useState} from "react";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'title1', body: 'Some description'},
        {id: 2, title: 'title2', body: 'Some description'},
        {id: 3, title: 'title3', body: 'Some description'},
        {id: 4, title: 'title4', body: 'Some description'}

    ])

    const createPost = (newPost)=>{
        setPosts([...posts, newPost])
    }
    const removePost = (post) =>{
        setPosts(posts.filter((p)=>( p.id !==post.id
        )))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <Counter/>
            <Posts posts={posts} remove={removePost} title="Some custom title"/>
        </div>
    );
}

export default App;
