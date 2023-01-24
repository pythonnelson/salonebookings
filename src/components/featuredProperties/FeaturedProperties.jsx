import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="featuredProperties">
        <div className="featuredPropertiesItem">
            <img 
                src="https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150__340.jpg" 
                alt="featuredPropertiesImg" 
                className="featuredPropertiesImg" 
            />
            <span className="featurePropertiesName">Real Estate</span>
            <span className="featurePropertiesCity">Freetown</span>
            <span className="featurePropertiesPrice">Starting NLe 5.9</span>
            <div className="featuredPropertiesRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="featuredPropertiesItem">
            <img 
                src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159__340.jpg" 
                alt="featuredPropertiesImg" 
                className="featuredPropertiesImg" 
            />
            <span className="featurePropertiesName">Real Estate</span>
            <span className="featurePropertiesCity">Makeni</span>
            <span className="featurePropertiesPrice">Starting NLe 5.9</span>
            <div className="featuredPropertiesRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="featuredPropertiesItem">
            <img 
                src="https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__340.jpg" 
                alt="featuredPropertiesImg" 
                className="featuredPropertiesImg" 
            />
            <span className="featurePropertiesName">Real Estate</span>
            <span className="featurePropertiesCity">Kenema</span>
            <span className="featurePropertiesPrice">Starting NLe 5.9</span>
            <div className="featuredPropertiesRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="featuredPropertiesItem">
            <img 
                src="https://cdn.pixabay.com/photo/2014/12/10/06/49/venetian-562762__340.jpg" 
                alt="featuredPropertiesImg" 
                className="featuredPropertiesImg" 
            />
            <span className="featurePropertiesName">Real Estate</span>
            <span className="featurePropertiesCity">Koinadugu</span>
            <span className="featurePropertiesPrice">Starting NLe 5.9</span>
            <div className="featuredPropertiesRating">
                <button>9.0</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties