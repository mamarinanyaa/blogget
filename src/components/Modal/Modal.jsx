import style from './Modal.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from './img/close.svg'
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { Comments } from './Comments/Comments';
import {FormComment} from './FormComment/FormComment'
import { useSelector } from 'react-redux';

export const Modal = ({id, closeModal}) => {
  const [postCommentsData] = useCommentsData(id);
  const status = useSelector(state=>state.postcommentsdataReducer.status);

  const handleClick = (e) => {

    if (e.key == 'Escape'){
      closeModal();
    }
    if (e.target.className == style.overlay)
      closeModal();
  }

  useEffect(()=>{
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleClick)
    return ()=>{
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleClick)
    }
  }, []);

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        {status === 'loading' && 'Loading...'}
        {status === 'error' && 'Error'}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>{postCommentsData.title}</h2>
          
            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank',
                    },
                  },
                },
              }}>
                {postCommentsData.markdown}
              </Markdown>
                
            </div>

            <p className={style.author}>{postCommentsData.author}</p>

            <Comments comments={postCommentsData.comments}/>
            <FormComment />

            <button className={style.close} onClick={closeModal}>
              <CloseIcon />
            </button>
          </>
        )}
        
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
}