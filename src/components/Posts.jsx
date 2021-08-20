import React from 'react';
import PostItem from "./PostItem";

const Posts = ({posts, title, remove}) => {
    if (posts.length ===0) {
        return (
            <h1 style={{textAlign: 'center'}}>There are no posts at all</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} index = {index+1} post = {post} key = {post.id}/>
            )}
        </div>
    );
};

export default Posts;