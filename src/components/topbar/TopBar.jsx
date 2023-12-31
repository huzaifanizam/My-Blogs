import { Link } from "react-router-dom";
import "./topbar.css"

export default function topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
      <Link
            to="https://www.facebook.com/huzaifa.nizam.3?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="topIcon fa-brands fa-square-facebook"></i>
          </Link>

          <Link
            to="https://www.linkedin.com/in/huzaifa-nizam-741631264"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="topIcon fa-brands fa-linkedin"></i>
          </Link>

          <Link
            to="https://www.instagram.com/huzaifa_nizam?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="topIcon fa-brands fa-square-instagram"></i>
          </Link>

          <Link
            to="https://github.com/huzaifanizam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="topIcon fa-brands fa-github"></i>
          </Link>
        </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="Link">Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="Link">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="Link">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/Write" className="Link">WRITE</Link>
          </li>
          <li className="topListItem">
          {user && <Link to="/logout" className="Link">LOGOUT</Link>}
          </li>
        </ul>
      </div>
      <div className="topRight">
       {user ? ( <img className="topImg" 
        src="https://images.pexels.com/photos/18794028/pexels-photo-18794028/free-photo-of-woman-standing-on-a-grass-field-and-looking-at-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" />
        ):(
            
              <ul className="topList">
                <li className="topListItem">
                  <Link to="/Login" className="Link">LOGIN</Link>
                </li>
                <li className="topListItem">
                  <Link to="/Register" className="Link">REGISRTR</Link>
                </li>
              </ul>

        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
