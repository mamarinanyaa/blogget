import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import PropTypes from 'prop-types';
import {URL} from '../../../api/const'
import { useContext, useState } from 'react';
import {useAuth} from '../../../hooks/useAuth'
import { tokenContext } from '../../../context/tokenContext';
import { authContext } from '../../../context/authContext';

export const Auth = () => {

  const {delToken} = useContext(tokenContext)
  const {auth, resetAuth} = useContext(authContext)
  const [isLogged, setIsLogged] = useState(false);

  // useEffect(() => {
  //   console.log(auth);
  // }, [auth]);
  
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
            delToken();
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
