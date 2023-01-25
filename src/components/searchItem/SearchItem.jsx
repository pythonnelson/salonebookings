import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img   
            src="https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150__340.jpg" 
            alt="searchItem" 
            className="searchItemImg" 
        />

        <div className="searchItemDesc">

            <h1 className="searchItemTitle">Njala Avenue Estates</h1>
            <span className="searchItemDistance">400m from center</span>
            <span className="searchItemTaxiOption">Free airport pickup</span>
            <span className="searchItemSubtitle">
                Nice sea view and refreshing natural air
            </span>
            <span className="searchItemFeatures">
                Sea View . 1 bathroom . 150m² Kingsize bed
            </span>
            <span className="searchItemCalcelOption">Free Cancellation</span>
            <span className="searchItemTaxiOptionSubtitle">
                You can cancel at anytime.
            </span>
        </div>
        <div className="searchItemDetails">
            <div className="searchItemRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="searchItemDetailText">
                <span className="searchItemPrice">NLe100</span>
                <span className="searchItemTaxOption">Includes taxes and other charges</span>
                <button className="searchItemChkButton">Check availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem