import React from 'react';
import PostItem from "./PostItem";

const Posts = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem index = {index+1} post = {post} key = {post.id}/>
            )}
        </div>
    );
};

export default Posts;