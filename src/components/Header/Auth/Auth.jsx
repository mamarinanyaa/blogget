import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { authContext } from '../../../context/authContext';
import { getToken, setToken } from '../../../hooks/token';
import { useDispatch } from 'react-redux';
import { deleteToken, updateToken } from '../../../store/tokenReducer.js';

export const Auth = () => {

  // const {delToken} = useContext(tokenContext)
  const {auth, resetAuth} = useContext(authContext)
  const [isLogged, setIsLogged] = useState(false);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(auth);
  // }, [auth]);

  const handleClick = () => {
    window.location.href = urlAuth;
  }
  
  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={()=>{
            setIsLogged(!isLogged);
          }}>
            <img className={style.img} src={'img'} title={auth.name}/>
          </button>
          {isLogged ? (<button className={style.logout} onClick={()=>{
            // delToken();
            // dispatch(deleteToken());
            resetAuth();
            }}>Выйти</button>): null}
        </>
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
