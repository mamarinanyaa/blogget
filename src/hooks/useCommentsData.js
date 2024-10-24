import { useState, useEffect, useContext } from "react";
import { tokenContext } from "../context/tokenContext";
import { URL } from "../api/const.js";
import { useSelector } from "react-redux";

export const useCommentsData = (id) => {

    // const {token} = useContext(tokenContext)
    const token = useSelector(state=>state.tokenReducer.token)
    const [postData, setPostData] = useState({})
    const [comments, setComments] = useState([])

    useEffect (() => {

        if (!token) return;

        setPostData({})
        setComments([{body: 'Loading...'}])

        fetch(`${URL}/comments/${id}`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((response)=> {
            // console.log(response);
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then((data) => {
            const dataPost = data[0].data.children[0].data;
            let dataComment = data[1].data.children.map((el) => {
                // console.log(el);
                return {
                    author: el.data.author,
                    body: el.data.body
                }
            })
            

            setComments(data[1].data.children.map((el) => {
                // console.log(el);
                return {
                    author: el.data.author,
                    body: el.data.body
                }
            }))
            
            setPostData({title: dataPost.title, author: dataPost.author, markdown: dataPost.selftext, comments: dataComment})
        });

    }, [token])

    return [postData, comments];
}

