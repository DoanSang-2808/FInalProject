import {  } from "module";

export const fetchBlogs = () => (
    async(dispatch) => {
        const response = await jsonAPI.get('/blogs');
        dispatch({
            type :"FETCH_BLOGS",
            payload: response.data,
        })
    }
)
export const fetchBlog = () => (
    async(dispatch) => {
        const response = await jsonAPI.get('/blog');
        dispatch({
            type:"FETCH_BLOG",
            payload: response.data,
        })
    }
)
export const deleteBlog = () => (
    async(dispatch) => {
        const response = await jsonAPI.delete('/deleteblog')
        dispatch({
            type:"DELETE_BLOG",
            payload: response.data,
        })
    }
)
export const postBlog = () => (
    async(dispatch) => {
        const response = await jsonAPI.push('/postblog');
        dispatch({
            type : "POST_BLOG",
            payload: response.data
        })
    }

)
