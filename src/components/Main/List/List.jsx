import style from './List.module.css';
import Post from './Post';
import { usePostsData } from '../../../hooks/usePostsData';
import { Preloader } from '../../../UI/Preloader/Preloader';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

export const List = () => {
  const [postsData] = usePostsData()
  const status = useSelector(state=>state.postsdataReducer.status)
  const endList = useRef(null);

  useEffect(()=>{

    if (!postsData.length) return;
    const observer = new IntersectionObserver((entries) => {
      // console.log('test');
      if (entries[0].isIntersecting) 
        console.log('see');
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

  }, [endList.current])

  return (
    <ul className={style.list}>
        {status === 'loading' && <Preloader />}
        {/* {status === 'error' && 'Error'} */}
        {status === 'loaded' && (
          <>
            {postsData.map((postData, index) => (<Post key = {index} postData={postData} />))}
            <li ref={endList} className={style.end}/>
          </>
        )}
    </ul>
  );
};