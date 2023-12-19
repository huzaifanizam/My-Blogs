import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
        </div>
      <img
      className="headerImg"
      src="https://images.pexels.com/photos/4793/nature-brook-creek-stream.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="" />
    </div>
  );
}
