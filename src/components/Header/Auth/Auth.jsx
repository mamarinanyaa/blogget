import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth.js';
import {AuthLoader} from './AuthLoader/AuthLoader.jsx'

export const Auth = () => {

  // const {delToken} = useContext(tokenContext)
  // const {auth, resetAuth} = useContext(authContext)
  const [auth, loading, resetAuth] = useAuth()
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <div className={style.container}>
      {loading ?(<AuthLoader />) : auth.name ? (
        <>
          <button className={style.btn} onClick={()=>{
            setIsLogged(!isLogged);
          }}>
            <img className={style.img} src={'img'} title={auth.name}/>
          </button>
          {isLogged ? (<button className={style.logout} onClick={()=>{
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
