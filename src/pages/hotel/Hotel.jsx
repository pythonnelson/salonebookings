import "./hotel.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Hotel = () => {
  const photos = [
    {
      src: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg"
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
        <div className="slider">

        </div>
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>

          <h1 className="hotelTitle">Njala Avanue</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} className="addressIcon" />
            <span>Aberdeen Road, Freetown, Sierra Leone</span>
          </div>

          <span className="hotelDistance">
            Excellent location - 1200m from center
          </span>

          <span className="hotelPricehighlight">
            Book a stay over NLe100 at this property and get a free airport pickup
          </span>

          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImageWrapper">
                <img 
                  src={photo.src}
                  alt="" 
                  className="hotelImage" 
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelTitle">Stay in the heart of salone</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem 
                quis eaque error enim laboriosam! Fugit neque ad eveniet, itaque dolores 
                necessitatibus accusantium in aspernatur maiores odio soluta numquam 
                quibusdam sequi. 
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem 
                quis eaque error enim laboriosam! Fugit neque ad eveniet, itaque dolores 
                necessitatibus accusantium in aspernatur maiores odio soluta numquam 
                quibusdam sequi.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem 
                quis eaque error enim laboriosam! Fugit neque ad eveniet, itaque dolores 
                necessitatibus accusantium in aspernatur maiores odio soluta numquam 
                quibusdam sequi.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1  className="hotelTitle">Perfect for a week night stay</h1>
              <span>
                Located at the core heart of Sierra Leone, West part of the beautiful land
              </span>
              <h2>
                <b>NLe 100</b> (7 days)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel