import Counter from "./components/Counter";
import './styles/App.css'
import {useState} from "react";
import Posts from "./components/Posts";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'title1', body: 'Some description'},
        {id: 2, title: 'title2', body: 'Some description'},
        {id: 3, title: 'title3', body: 'Some description'},
        {id: 4, title: 'title4', body: 'Some description'}

    ])
    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

    return (
        <div className="App">
            <form>
                {/*driven component*/}
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="title"/>
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="description"/>
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
            <Counter/>
            <Posts posts={posts} title="Some custom title"/>
        </div>
    );
}

export default App;
