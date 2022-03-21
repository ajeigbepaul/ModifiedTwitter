import React, { useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../firebase";
import { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postCollectionRef = collection(db, "posts");
    onSnapshot(
      query(postCollectionRef, orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }
    );
  }, []);
  return (
    <div className="feed">
      {/* home */}
      <div className="feed__header">
        <h3>Home</h3>
      </div>
      {/* Tweetbox */}
      <TweetBox />
      {/* posts */}
      <FlipMove>
        {posts.map(
          ({
            id,
            data: {
              displayName,
              username,
              verified,
              image,
              avater,
              text,
              timestamp,
            },
          }) => (
            <Post
              key={id}
              id={id}
              displayName={displayName}
              username={username}
              verified={verified}
              image={image}
              avater={avater}
              text={text}
              timestamp={timestamp}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
