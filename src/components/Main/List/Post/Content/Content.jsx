import style from '../Post.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as Delete} from '../img/delete.svg'
import { Text } from '../../../../../UI/Text/Text';
import { useState } from 'react';
import { Modal } from '../../../../Modal/Modal';

export const Content = ({title, author}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className={style.content} >
        <button className={style.delete} onClick={()=>{console.log('click');}}>
          <Delete width={30} height={30}/>
        </button>
        <Text As='h2' className={style.title}>
          <Text As='a' size={18} tsize={24} className={style.linkPost} href='#post' >{title}</Text>
        </Text>
        <Text As='a' size={12} tsize={24} color='orange' className={style.linkPost} href='#author'>{author}</Text>
        {isModalOpen && <Modal />}
    </div>
  );
};