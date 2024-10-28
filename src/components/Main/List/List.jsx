import style from './List.module.css';
import Post from './Post';
import { usePostsData } from '../../../hooks/usePostsData';
import { Preloader } from '../../../UI/Preloader/Preloader';
import { useSelector } from 'react-redux';

export const List = () => {

  const [postsData] = usePostsData()
  const status = useSelector(state=>state.postsdataReducer.status)

  return (
    <ul className={style.list}>
        {status === 'loading' && <Preloader />}
        {status === 'error' && 'Error'}
        {status === 'loaded' && (<>{postsData.map((postData, index) => (<Post key = {index} postData={postData} />))}</>)}
    </ul>
  );
};