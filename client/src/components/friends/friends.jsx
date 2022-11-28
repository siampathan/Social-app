import "./friends-style.css";

const Friends = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImage"
        src={publicFolder + user.profilePicture}
        alt=""
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default Friends;
