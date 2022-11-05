import Post from "../post/post";
import Share from "../share/share";
import { Posts } from "../../dummyData";
import "./feed-style.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWraper">
        <Share />
        {Posts.map((P) => (
          <Post key={P.id} post={P} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
