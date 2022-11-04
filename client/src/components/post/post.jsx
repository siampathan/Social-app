import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./post-style.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="postUserName">Mahadi Hassan</span>
            <span className="postDate">2min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey It's My letast Post!! </span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="likeCounter">71 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> 9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
