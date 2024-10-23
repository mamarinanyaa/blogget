import style from './List.module.css';
import Post from './Post';
import { usePostsData } from '../../../hooks/usePostsData';

export const List = () => {

  const [postsData] = usePostsData()

  // console.log(postsData);

  return (
    <ul className={style.list}>
      {postsData.map((postData, index) => (<Post key = {index} postData={postData} />))}
    </ul>
  );
};