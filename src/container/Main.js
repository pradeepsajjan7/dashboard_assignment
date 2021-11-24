import Card from "../components/Card";
import Box from "../components/Box";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

const Main = () => {
  return (
    <div className="container-fluid" style={{ overflow: "hidden" }}>
      <Header />
      <SideBar />
      <hr />
      <Box />
      <hr />
      <Card />
    </div>
  );
};

export default Main;
