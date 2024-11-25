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
import { useNavigate } from 'react-router-dom';

const LIST = [
  {
    value: 'Главная',
    Icon: HomeIcon,
    link: 'rising'
  },
  {
    value: 'Топ',
    Icon: EyeIcon,
    link: 'top'
  },
  {
    value: 'Лучшие',
    Icon: SaveIcon,
    link: 'best'
  },
  {
    value: 'Горячие',
    Icon: PostIcon,
    link: 'hot'
  },
].map(assignId);

export const Tabs = () => {

  const [list, setlist] = useState(LIST);
  const [isDropDownOpen, setisDropDownOpen] = useState(false);
  const [isDropDown, setisDropDown] = useState(false);
  const [titleDropDown, setTitleDropDown] = useState('addItem');
  const navigate = useNavigate();

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
        (isDropDownOpen || !isDropDown )&&  
        <ul className={style.list}>
          {
            list.map(({value, link, id, Icon}) => (
              <Text As='li' className={style.item} key={id}>
                <button className={style.btn} onClick={()=>{
                    setisDropDownOpen(!isDropDownOpen);
                    setTitleDropDown(value);
                    navigate(`/category/${link}`)
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