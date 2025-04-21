import React from 'react';
import s from './Profile.module.css';
import MyPosts from '../Myposts/MyPosts';

const Profile = () => {
    return  <div className={s.content}>
    <div>
    <img src='https://sun9-41.userapi.com/impf/c845018/v845018174/627cd/wDVerwVjeak.jpg?size=1280x1024&quality=96&sign=6013b8d0090ec536e79222b2404682e5&c_uniq_tag=65aspJ4_4yv0wt60an2B0iPF4Z2yoG2gMp6F56J5d2g&type=album'></img>
    </div>
    <div>
      ava + descripyion
    </div>
    <MyPosts/>
 </div>
}

export default Profile;