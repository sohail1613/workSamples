import React from 'react'
import "./Feed.css";
import MessageSender from "./MeesageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className='feed'>
        {/* Story reels */}
        <MessageSender />
        <Post 
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbKCoBTZwfhVw0ArKoCVJDxt2EcTJ6b_1Vg&usqp=CAU.png" 
        message="it works perfcetly"
        timeStamp = "its timeStamp"
        userName = 'sohail'
        image = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />

        <Post 
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbKCoBTZwfhVw0ArKoCVJDxt2EcTJ6b_1Vg&usqp=CAU.png" 
        message="it works perfcetly"
        timeStamp = "its timeStamp"
        userName = 'sohail' />
    </div>
  )
}

export default Feed