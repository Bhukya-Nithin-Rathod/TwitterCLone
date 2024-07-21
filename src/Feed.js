import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import { db } from "./firebase";
import { onSnapshot, collection } from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const unsubscribe = onSnapshot(postsCollectionRef, (snapshot) => {
      const postData = snapshot.docs.map((doc) => doc.data());
      setPosts(postData);
    });

    // Return a cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [postsCollectionRef]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {posts.map((post, index) => (
        <Post
          key={index}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
