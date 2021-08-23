import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Posts = ({posts, title, remove}) => {
    if (posts.length === 0) {
        return (
            <h1 style={{textAlign: 'center'}}>There are no posts at all</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} index={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default Posts;