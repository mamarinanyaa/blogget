// import style from './Content.module.css';
import style from '../Post.module.css'
import PropTypes from 'prop-types';
import {ReactComponent as Delete} from '../img/delete.svg'
import { Text } from '../../../../../UI/Text/Text';
import { useState } from 'react';
import { Modal } from '../../../../Modal/Modal';

export const Content = ({id, title, author}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className={style.content}>
        <button className={style.delete}>
          <Delete width={30} height={30}/>
        </button>
        <Text As='h2' className={style.title}>
          <Text As='a' size={18} tsize={24} className={style.linkPost} href='#post' onClick={() => { setIsModalOpen(true) }}>{title}</Text>
        </Text>
        <Text As='a' size={12} tsize={24} color='orange' className={style.linkAuthor} href='#author'>{author}</Text>
        {isModalOpen && <Modal id={id} closeModal={closeModal}/>}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
}