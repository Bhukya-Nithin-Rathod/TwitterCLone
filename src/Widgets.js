import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Widgets() {
  return (
    <div className='Widgets'>
      <div className="wigets__input">
        <SearchRoundedIcon className="wigets__searchIcon" />
        <input placeholder='Search Twitter' type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed />
        <TwitterTimelineEmbed 
          sourceType="profile"
          screenName="Elon Musk"
          options={{ height: 400}}
        />
         <blockquote class="twitter-tweet"><p lang="en" dir="ltr">the bird is freed</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1585841080431321088?ref_src=twsrc%5Etfw">October 28, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <blockquote class="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/N9i79HllZv">pic.twitter.com/N9i79HllZv</a></p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1706586107335311542?ref_src=twsrc%5Etfw">September 26, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Next I’m buying Coca-Cola to put the cocaine back in</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1519480761749016577?ref_src=twsrc%5Etfw">April 28, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
       
        
      
      </div>
    </div>
  )
}

export default Widgets
