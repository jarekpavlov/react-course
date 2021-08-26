import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../api/PostService";
import Loader from "../components/ui/loader/Loader";

const PostIdPage = () => {
    const urlParam = useParams()

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchingById, isPostLoading, error] = useFetching(async (id) => {
        const result = await PostService.getById(id)
        setPost(result.data)
    })
    const [fetchingComments, isCommentLoading, CommentError] = useFetching(async (id) => {
        const result = await PostService.getCommentsById(id)
        setComments(result.data)
    })
    useEffect(() => {
        fetchingById(urlParam.id)
        fetchingComments(urlParam.id)
    }, [])


    console.log(urlParam)
    return (
        <div>
            <h1>You are on the post page with ID = {urlParam.id} </h1>
            {isPostLoading
                ? <Loader/>
                : <div>{post.title}</div>
            }
            <h1>Comments</h1>
            {isCommentLoading
                ? <Loader/>
                : <div>
                    {comments.map((comment) => (
                        <div style={{marginTop: 15}}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default PostIdPage;