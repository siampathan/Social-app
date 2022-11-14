import { Users } from "../../dummyData";
import Online from "../online/online";
import "./rightbar-style.css";

const RightBar = ({ Profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b> Pola Foster </b> and <b> 3 other firends </b> have birthday
            today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City: </span>
            <span className="rightBarInfoValue">Dhaka</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From: </span>
            <span className="rightBarInfoValue">Dhaka</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">RelationShip: </span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jhon Carter</span>
          </div>

          <div className="rightBarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jhon Carter</span>
          </div>

          <div className="rightBarFollowing">
            <img
              src="assets/person/8.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jhon Carter</span>
          </div>

          <div className="rightBarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jhon Carter</span>
          </div>

          <div className="rightBarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jhon Carter</span>
          </div>

          <div className="rightBarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jhon Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {Profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
