import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="propertyList">
        <div className="propertyListItem">
            <img 
                src="https://cdn.pixabay.com/photo/2013/04/18/14/39/ship-105596_960_720.jpg" 
                alt="property" 
                className="propertyListImg" 
            />
            <div className="propertyListTitles">
                <h1>Hotels</h1>
                <h2>345,877 Hotels</h2>
            </div>
        </div>

        <div className="propertyListItem">
            <img 
                src="https://cdn.pixabay.com/photo/2012/03/04/00/43/architecture-22039_960_720.jpg" 
                alt="property" 
                className="propertyListImg" 
            />
            <div className="propertyListTitles">
                <h1>Apartments</h1>
                <h2>344,877 Apartments</h2>
            </div>
        </div>

        <div className="propertyListItem">
            <img 
                src="https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_960_720.jpg" 
                alt="property" 
                className="propertyListImg" 
            />
            <div className="propertyListTitles">
                <h1>Resorts</h1>
                <h2>34,556 Resorts</h2>
            </div>
        </div>
        
        <div className="propertyListItem">
            <img 
                src="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg" 
                alt="property" 
                className="propertyListImg" 
            />
            <div className="propertyListTitles">
                <h1>Villas</h1>
                <h2>345,555 Villas</h2>
            </div>
        </div>

        <div className="propertyListItem">
            <img 
                src="https://cdn.pixabay.com/photo/2015/09/05/20/07/cabin-924958_960_720.jpg" 
                alt="property" 
                className="propertyListImg" 
            />
            <div className="propertyListTitles">
                <h1>Cabins</h1>
                <h2>546,877 Cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList