import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import { db } from './firebase'; // Import your Firebase configuration
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    // Check if the tweet message is not empty
    if (tweetMessage.trim() !== '') {
      // Use the 'db' instance to access Firestore
      addDoc(collection(db, 'posts'), { // Specify the collection name
        displayName: 'Nithin Rathod',
        username: 'Bnr',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "https://i.makeagif.com/media/1-03-2017/6Ag1Yv.gif",
      })
        .then(() => {
          console.log('Tweet added to Firestore successfully.');
          setTweetMessage("");
          setTweetImage("");
        })
        .catch((error) => {
          console.error('Error adding tweet to Firestore:', error);
        });
    } else {
      // Show an error message if the tweet is empty
      alert("Please enter a tweet message.");
    }
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-CI-nQXTvtJhMOoCT0T8XwH9dUQ3lqVXfw&usqp=CAU"/>
          <input 
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?" 
            type="text"
          />
        </div>
        <input  
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}  
          className="tweetBox__imageInput"
          placeholder="Enter image URL" 
          type="text"
        />
        <Button 
          onClick={sendTweet}
          type="submit"  
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
