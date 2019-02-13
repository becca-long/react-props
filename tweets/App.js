// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    return tweets.map((tweet) => {
        return (
        <div className="bg-white p-2 m-2 w-50">
                <div className="d-flex align-items-center">
                    <img style={{width: 50}} src={tweet.user.profilePic} />
                    <div className="mt-4 ml-2">
                        <b>{tweet.user.username}</b>
                        {tweet.user.isVerified ? <img style={{width: 15}} src="twitterIcons/check-circle.svg" /> : ''}
                        <p>{tweet.user.handle}</p>
                        
                    </div>
                </div>
                <h3>{tweet.text}</h3>
                <hr />
                <div className="d-flex text-secondary">
                    <img style={{opacity: 0.62}} src="twitterIcons/message-circle.svg" />
                    <b className="mr-3 ml-1">{tweet.replies}</b>
                    <img style={{opacity: 0.62}} src="twitterIcons/repeat.svg" />
                    <b className="mr-3 ml-1">{tweet.retweets}</b>
                    <img style={{opacity: 0.62}} src="twitterIcons/heart.svg" />
                    <b className="mr-3 ml-1">{tweet.likes}</b>
                </div>
            </div>
        )
    })
}

const Tweet = null;  // CHALLENGE: Write a separate Tweet component for use in the App component

const User = null;  // CHALLENGE: Write a separate User component for use in the Tweet component

const Metrics = null;  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly