import React, { useEffect, useState } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "./firebase";



function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').orderBy("timestamp","desc").onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.date()}))));
  
  
  }, []);
    return (
        <div className='feed'>
          <StoryReel/>
          <MessageSender/> 
          {posts.map((post) =>(
          <Post 
          key={post.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          image={post.data.image}
        /> 
          ))} 
        </div>
    )
}

export default Feed
