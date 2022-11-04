import Post from "../post/post";
import Share from "../share/share";
import "./feed-style.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWraper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
