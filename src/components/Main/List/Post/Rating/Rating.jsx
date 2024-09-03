import style from '../Post.module.css';
import { Text } from '../../../../../UI/Text/Text';
import PropTypes from 'prop-types'


export const Rating = ({ups}) => {
  // console.log(style);
  return (
    <Text As='div' className={style.rating}>
        <button className={style.up} aria-label='Повысить рейтинг'/>
        <Text As='p' className={style.ups}>{ups}</Text>
        <button className={style.down} aria-label='Понизить рейтинг'/>
    </Text>
  );
};

Rating.propTypes = {
  ups: PropTypes.number,
}