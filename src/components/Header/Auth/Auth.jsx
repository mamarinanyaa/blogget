import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import PropTypes from 'prop-types';
import {URL} from '../../../api/const'
import { useEffect, useState } from 'react';

export const Auth = ({token}) => {

  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;
    console.log('Auth');
    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => response.json())
    .then(({name, icon_img: iconImg}) => {
      const img = iconImg.replace(/\?.*$/,'');
      setAuth({name, img})
    });
  }, [token])

  // useEffect(() => {
  //   console.log(auth);
  // }, [auth]);
  
  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn}>
          <img className={style.img} src={'img'} title={auth.name}/>
        </button>
        
      ) : (
        <Text As='a' href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </div>
  )
}

Auth.propTypes = {
  token: PropTypes.string,
}
