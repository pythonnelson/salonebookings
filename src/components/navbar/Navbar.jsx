import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            {/* ========= Logo ========= */}
            <span className="logo">salonebooking</span>

            {/* ========= Login & Register Buttons ========= */}
            <div className="navItems">
                <button className="navButton">Login</button>
                <button className="navButton">Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar