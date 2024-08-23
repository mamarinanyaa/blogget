import style from '../Post.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as Delete} from '../img/delete.svg'
import { Text } from '../../../../../UI/Text/Text';

export const Content = ({title, author}) => {
  // console.log(style);
  return (
    <div className={style.content}>
        <button className={style.delete}>
          <Delete width={30} height={30}/>
        </button>
        <Text As='h2' className={style.title}>
          <Text As='a' size={18} tsize={24} className={style.linkPost} href='#post'>{title}</Text>
        </Text>
        <Text As='a' size={12} tsize={24} color='orange' className={style.linkPost} href='#author'>{author}</Text>
    </div>
  );
};