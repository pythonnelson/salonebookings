import "./list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from 'date-fns';
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
              <div className="listSearchItem">
                <label htmlFor="destination">Destination</label>
                <input type="text" placeholder={destination} />
              </div>
              <div className="listSearchItem">
                <label>Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    onChange={item=>setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>

              <div className="listSearchItem">
                <div className="listSearchOptions">
                  <label htmlFor="options" className="OptionSearchTitle">Options</label>
                  <div className="listSearchOptionItem">
                    <span className="listSearchOptionText">
                      Min Price <small>per night</small>
                    </span>
                    <input type="number" className="listSearchInput" />
                  </div>

                  <div className="listSearchOptionItem">
                    <span className="listSearchOptionText">
                      Max Price <small>per night</small>
                    </span>
                    <input type="number" className="listSearchInput" />
                  </div>

                  <div className="listSearchOptionItem">
                    <span className="listSearchOptionText">
                      Adult
                    </span>
                    <input type="number" min={1} className="listSearchInput" placeholder={options.adult} />
                  </div>

                  <div className="listSearchOptionItem">
                    <span className="listSearchOptionText">
                      Children
                    </span>
                    <input type="number" min={0} className="listSearchInput" placeholder={options.children} />
                  </div>

                  <div className="listSearchOptionItem">
                    <span className="listSearchOptionText">
                      Room(s)
                    </span>
                    <input type="number" min={1} className="listSearchInput" placeholder={options.room} />
                  </div>
                </div>
              </div>
              <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List