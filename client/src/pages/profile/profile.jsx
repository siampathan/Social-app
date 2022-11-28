import Feed from "../../components/feed/feed";
import RightBar from "../../components/rightbar/rightbar";
import SideBar from "../../components/sidebar/sidebar";
import TopBar from "../../components/topbar/topbar";
import "./profile-style.css";

const Profile = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${publicFolder}/post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${publicFolder}/person/4.jpeg`}
                alt=""
              />
            </div>

            <div className="profileInfo">
              <h4 className="userName">Mahadi Hassan</h4>
              <p className="userDesc">Student</p>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
