import { Button, Avatar } from "@mui/material";
import db from "../firebase";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useStateValue } from "../StateProvider";

import "./Tweetbox.css";
const TweetBox = () => {
  const [tweets, setTweets] = useState("");
  const [tweetimg, setTweetimg] = useState("");
  const [{ user }] = useStateValue();

  const handleTweets = async (e) => {
    e.preventDefault();
    const postCollectionRef = collection(db, "posts");
    const payload = {
      displayName: user.displayName,
      username: user.displayName,
      verified: true,
      image: tweetimg,
      avater: user.photo,
      text: tweets,
      timestamp: serverTimestamp(),
    };
    await addDoc(postCollectionRef, payload);
    setTweets("");
    setTweetimg("");
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src={user.photo} />
          <input
            type="text"
            value={tweets}
            onChange={(e) => setTweets(e.target.value)}
            placeholder="Whatin dey happen ?"
          />
        </div>
        <input
          type="text"
          value={tweetimg}
          onChange={(e) => setTweetimg(e.target.value)}
          className="tweetbox__imgUrl"
          placeholder="Optional : Enter Image Url"
        />

        <Button type="submit" onClick={handleTweets} className="tweetbox__btn">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
