import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';

// Icons import
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

function Post ( {displayName, username, verified, text, image, avatar }){
    return (
      <div className="post">
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedSharpIcon className="post__badge" />} {" "}@{username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img className='post__image' src={image} alt=''/>
          <div className="post__footer">
            <ChatBubbleOutlineRoundedIcon />
            <RepeatRoundedIcon />
            <FavoriteBorderRoundedIcon />
            <BookmarkBorderRoundedIcon />
          </div>
        </div>
      </div>
    );
}  

export default Post;
