import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import SideBar from "../../sidebar/SideBar"
import "./Home.css"

export default function Home() {
  return (
    <>
      <Header />
    <div className="home">
      <Posts />
      <SideBar />
    </div>
    </>
  )
}
