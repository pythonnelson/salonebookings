import { faCalendarDays, faHeart } from "@fortawesome/free-regular-svg-icons"
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { DateRange } from "react-date-range"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import "./header.css"

const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    // ====== ADULT, CHILDREN AND ROOM HANDLER 
    const handleOption = (name, operation) => {
        setOptions(prev=>{
            return {
                ...prev, [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
            }
        })
    }
  return (
    <div className="header">
        <div className="headerContainer">
            {/* =========== Header Icons ======= */}
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Comfort</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faHeart} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
             {/* =========== Header Icons // ======= */}

            {type !== "list" && <>
                <h1 className="headerTitle">
                    Enjoy the comfort from home, it's worth every Penny.
                </h1>
                <p className="headerDesc">
                    Get lifetime memories off your home with **salonebookings
                </p>
                <button className="headerButton">
                    Sign in / Register
                </button>

                {/* ============== SEARCH BAR =========== */}
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Check places...." className="headerSearchInput" />
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                        {/* ============ Date range picker ============= */}
                        {openDate && <DateRange 
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                        {/* ========== OPTIONS PICKER/SELECTOR ============= */}
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionContainer">
                                    <button className="optionCounterButton" onClick={() => handleOption("adult", "decrease")} disabled={options.adult <= 1}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("adult", "increase")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionContainer">
                                    <button className="optionCounterButton" onClick={() => handleOption("children", "decrease")} disabled={options.children <= 0}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("children", "increase")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionContainer">
                                    <button className="optionCounterButton" onClick={() => handleOption("room", "decrease")}  disabled={options.room <= 1}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("room", "increase")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>

                    <div className="headerSearchItem">
                        <button className="headerButton">Search</button>
                    </div>

                </div>
            </>}
        </div>
    </div>
  )
}

export default Header