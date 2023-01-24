import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import PropertyList from "../../components/propertyList/PropertyList"
import "./home.css"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"


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
        <h1 className="homeTitle">Comfort from home</h1>
        <FeaturedProperties />
      </div>
      <br /><br /><br /><br />
      {/* ======== Home Container // =========== */}
    </div>
  )
}

export default Home