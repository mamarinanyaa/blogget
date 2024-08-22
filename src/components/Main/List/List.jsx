import style from './List.module.css';
import Post from './Post'

export const List = () => {

  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname',
      ups: 24,
      date: '2024-08-07T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname',
      ups: 32,
      date: '2024-08-07T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname',
      ups: 14,
      date: '2024-08-07T09:45:00.000Z',
    },
];

  return (
    <ul className={style.list}>
      {postsData.map((postData, index) => (<Post key = {index} postData={postData} />))}

      {[
        <Post key = '0' postData={postsData[0]}/>,
        <Post key = '1' postData={postsData[1]}/>,
        <Post key = '2' postData={postsData[2]}/>
      ]}
      {/* <Post postData={postData} /> */}
    </ul>
  );
};