import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img 
                src="https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg" 
                alt="featuredImage" 
                className="featuredImage" 
            />
            <div className="featuredTitles">
                <h1>Freetown</h1>
                <h2>50 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img 
                src="https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg" 
                alt="featuredImage" 
                className="featuredImage" 
            />
            <div className="featuredTitles">
                <h1>BO</h1>
                <h2>150 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img 
                src="https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg" 
                alt="featuredImage" 
                className="featuredImage" 
            />
            <div className="featuredTitles">
                <h1>Kenema</h1>
                <h2>80 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img 
                src="https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_960_720.jpg" 
                alt="featuredImage" 
                className="featuredImage" 
            />
            <div className="featuredTitles">
                <h1>Makeni</h1>
                <h2>30 properties</h2>
            </div>
        </div>

    </div>
  )
}

export default Featured