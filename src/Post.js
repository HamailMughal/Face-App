import { Avatar } from '@mui/material';
import React from 'react';
import "./Post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
            <div className="post__info">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUtCString()}</p>
            </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__opt">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>

                <div className="post__opt">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>


                <div className="post__opt">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>

                <div className="post__opt">
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                </div>
            </div>
        </div>
    )
}

export default Post
