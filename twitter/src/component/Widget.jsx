import SearchIcon from "@mui/icons-material/Search";
import Twitter from "@mui/icons-material/Twitter";
import { Avatar } from "@mui/material";
import React from "react";
import "./Widget.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { useStateValue } from "../StateProvider";
// import TweetEmbed from "react-tweet-embed";
// import TimelineEmbed from "react-tweet-embed";
// import ShareButton from "react-tweet-embed";

function Widget() {
  const [{ user }] = useStateValue();

  return (
    <div className="widget">
      <div className="widget__input">
        <SearchIcon />
        <input
          className="widget_inputinput"
          type="text"
          placeholder="Search Tweets ?"
        />
      </div>
      <div className="widget__container">
        <h3>Watin dey happen ?</h3>
        {/* <TweetEmbed tweetId={"858551177860055040"} />
        <TimelineEmbed
          sorceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        /> */}
        {/* <ShareButton
          url={"https://facebook.com"}
          options={{ text: "#reactjs is awesome", via: "cleaver programmar" }}
        /> */}
        <div className="widget__body">
          <div className="widget__bodyheader">
            <div className="widget__bodyheaderleft">
              <Avatar src={user.photo} className="widget__profile" />
              <div className="widget__bodyheaderinfo">
                <h3>Harjoke</h3>
                <span>@harjoke</span>
              </div>
            </div>
            <div className="widget__bodyheaderright">
              <Twitter className="widget__twitter" />
            </div>
          </div>
          <div className="widget__bodyheaderdesc">
            <p>Introduction to Webdev is such an amazing journey</p>
            <span className="widget__bodyspan">programming</span>
          </div>
          <div className="widget__img">
            <img src="pomile.jpg" alt="widgetimage" />
          </div>
          <div className="widget__timestamp">
            <h4>{new Date().toLocaleString()}</h4>
          </div>
          <div className="widget__footer">
            <div className="widget__footerlove">
              <FavoriteBorderIcon
                fontSize="small"
                className="widget__footericon"
              />
              <span className="widget__footerspan">45</span>
            </div>
            <div className="widget__footerbutton">
              <ChatBubbleOutlineOutlinedIcon
                fontSize="small"
                className="widget__footericonone"
              />
              <span className="widget__footerspan">500</span>
            </div>
          </div>
        </div>
        <div className="widget__tweetheader">
          <h3>
            Tweets by <span className="widget__tweetuser">@richlux</span>
          </h3>
        </div>

        <div className="widget__tweetby">
          <div className="widget__tweetbyheader">
            <div className="widget__tweetbyheaderleft">
              <Avatar src="pomile.jpg" className="widget__profile" />
              <div className="widget__tweetbyheaderinfo">
                <h3>Harjoke</h3>
                <span>@harjoke</span>
              </div>
            </div>
            <div className="widget__tweetbyheaderright">
              <Twitter className="widget__twitter" />
            </div>
          </div>
          <div className="widget__tweetbyheaderdesc">
            <p>Introduction to Webdev is such an amazing journey</p>
            <span className="widget__bodyspan">programming</span>
          </div>
          <div className="widget__tweetfooter">
            <div className="widget__tweetfooterleft">
              <FavoriteBorderIcon
                fontSize="small"
                className="widget__tweetfootericon"
              />
              <ChatBubbleOutlineOutlinedIcon
                fontSize="small"
                className="widget__tweetfootericonone"
              />
            </div>
            <div className="widget__tweetfooterright">
              <h3>Aug 6,2020</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
