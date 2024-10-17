import { useState, useEffect, useContext } from "react";
import { tokenContext } from "../context/tokenContext";
import { URL } from "../api/const";
import { getToken } from "./token";
import { useSelector } from "react-redux";

export const usePostsData = () => {

    // const {token} = useContext(tokenContext)
    const token = useSelector(state => state.tokenReducer.token)
    const [postsData, setPostsData] = useState([])

    
    useEffect (() => {
        if (!token) {
            setPostsData([])
            return
        };
        

        setPostsData([])

        fetch(`${URL}/best`, {
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
            // console.log(data.data.children);
            data.data.children.forEach(element => {
            setPostsData((prevData) => [...prevData, element.data])
            });
        });
    }, [token])

    return [postsData];
}

