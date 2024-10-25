import style from './Comments.module.css';
import { Comment } from './Comment/Comment';

export const Comments = ({comments}) => {
  return (
    <ul className={style.list}>
      <h2 className={style.list}>Comments: </h2>
      {(comments.length != 0) ? comments.map((comment, index)=>(<Comment key = {index} data = {comment}/>)) : <h3>No comments yet...</h3>}
    </ul>
  );
};