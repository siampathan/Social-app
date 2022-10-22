import Feed from "../../components/feed/feed";
import RightBar from "../../components/rightbar/rightbar";
import SideBar from "../../components/sidebar/sidebar";
import TopBar from "../../components/topbar/topbar";
import "./home-style.css";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
