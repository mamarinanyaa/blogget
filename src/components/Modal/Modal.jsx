import style from './Modal.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from './img/close.svg'
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { Comments } from './Comments/Comments';
import {FormComment} from './FormComment/FormComment'

export const Modal = ({id, closeModal}) => {
  const [postData, comments] = useCommentsData(id);

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
        <h2 className={style.title}>{postData.title}</h2>
        
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
            {postData.markdown}
          </Markdown>
            
        </div>

        <p className={style.author}>{postData.author}</p>

        <Comments comments={comments}/>
        <FormComment />

        <button className={style.close} onClick={closeModal}>
          <CloseIcon />
        </button>
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