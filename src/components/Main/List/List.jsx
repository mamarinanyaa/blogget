import style from './List.module.css';
import Post from './Post';
import { usePostsData } from '../../../hooks/usePostsData';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { postsdataRequestAsync } from '../../../store/postsdata/action';
import { useParams } from 'react-router-dom';

export const List = () => {
  // const [postsData] = usePostsData()
  const postsData = useSelector(state => state.postsdataReducer.data)
  const loading = useSelector(state=>state.postsdataReducer.loading)
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();
  console.log('page: ', page);

  useEffect(() => {
    dispatch(postsdataRequestAsync(page))
  }, [page])

  useEffect(()=>{
    // console.log(postsData.length);
    // if (!postsData.length) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsdataRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    // return () => {
    //   if (endList.current) {
    //     observer.unobserve(endList.current);
    //   }
    // }
  }, [endList.current])

  return (
    <ul className={style.list}>
          <>
            {postsData.map((data, index) => (<Post key = {index} postData={data} />))}
            <li ref={endList} className={style.end}></li>
          </>
    </ul>
  );
};