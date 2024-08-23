import style from './Heading.module.css';
import { Text } from '../../../UI/Text/Text';

export const Heading = ({text}) => {
  return <Text As='h1' size={22} tsize={26} center bold className={style.heading}>{text}</Text>
}