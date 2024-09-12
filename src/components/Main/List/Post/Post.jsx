import style from './Post.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg'
import formatDate from '../../../../utils/formatDate';
import { Content } from './Content/Content';
import { Rating } from './Rating/Rating';
import { Date } from './Date/Date';


export const Post = ({postData}) => {
  const {title, author, ups, thumbnail, date} = postData;
  
  return (
    <li className={style.post}>
      <img className={style.img} src={thumbnail ? thumbnail : notphoto} alt=""></img>

      <Content title={title} author={author}/>
      <Rating ups={ups} />
      <Date date={date ? date : '2024-08-07T09:45:00.000Z'}/>
      
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};