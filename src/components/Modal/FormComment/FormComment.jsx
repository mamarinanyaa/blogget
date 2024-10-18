import { useContext, useRef } from 'react';
import style from './FormComment.module.css';
import { authContext } from '../../../context/authContext';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/commentReducer.js';

export const FormComment = () => {

  const value = useSelector(state => state.commentReducer.comment);
  // const store = useStore();
  // const value = store.getState().comment;

  const dispatch =  useDispatch();
  
  const {auth} = useContext(authContext);
  const inputText = useRef(null);

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value))
  }

  return (
    <form className={style.form} onSubmit={(e)=>{
      e.preventDefault();
      console.log(inputText.current.value) 
    }}>
      <h3 size={14} tsize={18}>{auth.name}</h3>
      <textarea className={style.textarea} ref={inputText} value={value} onChange={handleChange}></textarea>
      <button className={style.btn}>Send</button>
    </form>
  );
};