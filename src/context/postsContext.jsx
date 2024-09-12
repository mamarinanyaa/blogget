import React from "react";
import { usePostsData } from "../hooks/usePostsData";

export const postsContext = React.createContext('');

// export const PostDataContextProvider = ({children}) => {
//     const [postsData] = usePostsData()

//     return (
//         <postsContext.Provider value={{postsData}}>
//             {children}
//         </postsContext.Provider>
//     )
// }