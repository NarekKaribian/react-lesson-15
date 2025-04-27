import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1X-AN3kFs-XAzQU5uTMgBv7IXiWaT-L7zeQ&s" alt="" />
        {props.message}
        <div>
            <span>like</span>&nbsp;
            {props.likesCount}
        </div>
      </div>
      )
    }

    export default Post;