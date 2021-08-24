import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    const removePost = (post) =>{
        props.remove(post)
    }

    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}.{props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={()=>removePost(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;