import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { forwardRef } from "react";

const Post = forwardRef(
  (
    { displayName, username, timestamp, image, text, verified, avater },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avater} />
        </div>
        {/* post body */}
        <div className="post__body">
          <div className="post__bodyheader">
            <div className="post__bodyheadername">
              <h4>
                {displayName}
                <span className="post__bodyusername">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h4>
            </div>
            <div className="post__bodyheaderdescription">
              <p>{text}</p>
            </div>
          </div>
          <div className="post__bodyimage">
            <img src={image} alt="" />
          </div>
          <div className="post__footer">
            <IconButton>
              <ChatBubbleOutlineIcon className="post__footerbubble" />
            </IconButton>
            <IconButton>
              <RepeatIcon className="post__footerrepeat" />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon className="post__footerfavorite" />
            </IconButton>
            <IconButton>
              <PublishIcon className="post__footerpublish" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
