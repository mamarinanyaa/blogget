import { useState, useEffect } from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types'
import { assignId } from '../../../utils/generateRandomId';
import { ReactComponent as ArrowIcon } from './img/arrow.svg';
import { ReactComponent as EyeIcon } from './img/eye.svg';
import { ReactComponent as HomeIcon } from './img/home.svg';
import { ReactComponent as PostIcon } from './img/post.svg';
import { ReactComponent as SaveIcon } from './img/save.svg';
import { Text } from '../../../UI/Text/Text';

const LIST = [
  {
    value: 'Главная',
    Icon: HomeIcon,
  },
  {
    value: 'Просмотренные',
    Icon: EyeIcon,
  },
  {
    value: 'Сохранённые',
    Icon: SaveIcon,
  },
  {
    value: 'Мои посты',
    Icon: PostIcon,
  },
].map(assignId);

export const Tabs = () => {

  const [list, setlist] = useState(LIST);
  const [isDropDownOpen, setisDropDownOpen] = useState(false);
  const [isDropDown, setisDropDown] = useState(false);
  const [titleDropDown, setTitleDropDown] = useState('addItem');

  const handleRisize = () => {
    if (document.documentElement.clientWidth < 768)
        setisDropDown(true)
      else
        setisDropDown(false);
  }

  useEffect(() => {
    window.addEventListener("resize", handleRisize);
    return () => {
      window.removeEventListener("resize", handleRisize);
    }
  }, [])

  const handleClick = (id) => {
    setlist(list.filter(item => item.id != id))
  }
  const addItem = () => {
    setlist([...list, assignId({value: "Новый пост"})]);
  }

  return (
    <div className={style.container}>
      { isDropDown &&
        <div className={style.wrapperBtn}>
          <button className={style.btn} onClick={()=>(setisDropDownOpen(!isDropDownOpen))}>
            {titleDropDown}
            <ArrowIcon width={30} height={30}/>
          </button>
        </div>
      }
      
      {
        (isDropDownOpen || !isDropDown )&&  <ul className={style.list}>
        {
          list.map(({value, id, Icon}) => (
            <Text As='li' className={style.item} key={id}>
              <button className={style.btn} onClick={()=>{
                  setisDropDownOpen(!isDropDownOpen)
                  setTitleDropDown(value)
                }}>
                {value}
                {Icon && <Icon width={30} height={30}/>}
              </button>
            </Text>
          ))
        }
      </ul>
      }
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
}