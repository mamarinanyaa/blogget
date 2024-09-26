import { useState, useEffect, useContext } from "react";
import { tokenContext } from "../context/tokenContext";
import { URL } from "../api/const";

export const usePostsData = () => {

    const {token} = useContext(tokenContext)
    const [postsData, setPostsData] = useState([])

    useEffect (() => {

        if (!token) return;

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

