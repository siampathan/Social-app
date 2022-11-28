import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./share-style.css";

const Share = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={`${publicFolder}person/1.jpeg`}
            alt=""
          />
          <input
            type="text"
            placeholder="What's in your mind"
            className="shareInput"
          />
        </div>
        <hr className="line" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText"> Photo or Video </span>
            </div>

            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText"> Tag </span>
            </div>

            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText"> Location </span>
            </div>

            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText"> Feelings </span>
            </div>
          </div>

          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
