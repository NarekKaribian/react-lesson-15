import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (  
    <div>
      My posts
    <div>
    <div>
      <textarea name="" id=""></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
     <Post message='Hi, how are you?' likesCount={5} />
     <Post message="It's my first post" likesCount={10} />
    </div>
  </div>
 </div>
    )
}

export default MyPosts;