import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WokrIcon from "@mui/icons-material/Work";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import SchoolIcon from "@mui/icons-material/School";
import "./sidebar-style.css";

const SideBar = () => {
  return (
    <div className="sidebar scroll">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarText">Chat</span>
          </li>

          <li className="sidebarListItem">
            <PlayCircleIcon className="sidebarIcon" />
            <span className="sidebarText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <PeopleAltIcon className="sidebarIcon" />
            <span className="sidebarText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <TurnedInIcon className="sidebarIcon" />
            <span className="sidebarText">Bookmarkes</span>
          </li>

          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarIcon" />
            <span className="sidebarText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <WokrIcon className="sidebarIcon" />
            <span className="sidebarText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <InsertInvitationIcon className="sidebarIcon" />
            <span className="sidebarText">Events</span>
          </li>

          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImage"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Jhone Doe</span>
          </li>

          <li className="sidebarFriend">
            <img
              className="sidebarFriendImage"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Jhone Doe</span>
          </li>

          <li className="sidebarFriend">
            <img
              className="sidebarFriendImage"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Jhone Doe</span>
          </li>

          <li className="sidebarFriend">
            <img
              className="sidebarFriendImage"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Jhone Doe</span>
          </li>

          <li className="sidebarFriend">
            <img
              className="sidebarFriendImage"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Jhone Doe</span>
          </li>

          <li className="sidebarFriend">
            <img
              className="sidebarFriendImage"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Jhone Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
