import style from './Post.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg'
import formatDate from '../../../../utils/formatDate';
import { Content } from './Content/Content';
import { Rating } from './Rating/Rating';
import { Date } from './Date/Date';


export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  //console.log('title, author, ups, date: ', title, author, ups, date);
  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt=""></img>

      <Content title={title} author={author}/>
      <Rating ups={ups} />
      <Date date={date}/>
      
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};