import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post 
      profilePic="https://miro.medium.com/max/2000/1*AwnthSYvn8KnfAX4X0LX0w.png"
      message="wow this works"
      timestamp="timestamp"
      username="Daka"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKhQXphT0M3G_anUYtfVP6fDBdu06A9seLM7e2umj9SaI5eERc23utNObImWor3kuwlU&usqp=CAU"
      />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
