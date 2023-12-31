import { Link } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/564x/b2/7a/3d/b27a3d8444edcfa925429b68d08e22e4.jpg"
          alt=""
        />
        <p>
          I am a versatile professional with a background in both e-commerce
          management and web development. My expertise extends to UI/UX design,
          ensuring visually appealing and user-friendly websites. Proficient in
          various technologies such as HTML, CSS, JavaScript, Bootstrap,
          React.js, and Tailwind. I am also well-versed in digital marketing and
          possess strong leadership and public speaking skills. Outside of work,
          I enjoy playing football and indulging in book reading.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGGORIES</span>
        <ul className="sidebarlist">
        <Link  rel="noopener noreferrer" className="sidebarListItem"> <li>Life</li></Link>
        <Link  rel="noopener noreferrer" className="sidebarListItem"> <li>Music</li></Link>
        <Link  rel="noopener noreferrer" className="sidebarListItem"> <li>Style</li></Link>
        <Link  rel="noopener noreferrer" className="sidebarListItem"> <li>Sport</li></Link>
        <Link  rel="noopener noreferrer" className="sidebarListItem"> <li>Tech</li></Link>
        <Link  rel="noopener noreferrer" className="sidebarListItem"> <li>Cinema</li></Link>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <Link
            to="https://www.facebook.com/huzaifa.nizam.3?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          </Link>

          <Link
            to="https://www.linkedin.com/in/huzaifa-nizam-741631264"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
          </Link>

          <Link
            to="https://www.instagram.com/huzaifa_nizam?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </Link>

          <Link
            to="https://github.com/huzaifanizam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sidebarIcon fa-brands fa-github"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
