import { useContext, useRef } from 'react';
import style from './FormComment.module.css';
import { authContext } from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const inputText = useRef(null);

  return (
    <form className={style.form} onSubmit={(e)=>{e.preventDefault()}}>
      <h3 size={14} tsize={18}>{auth.name}</h3>
      <textarea className={style.textarea} ref={inputText}></textarea>
      <button className={style.btn} onClick={()=>{console.log(inputText.current.value)}}>Send</button>
    </form>
  );
};