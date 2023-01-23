import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      {/* ======== Home Container =========== */}
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
      </div>
      {/* ======== Home Container // =========== */}
    </div>
  )
}

export default Home