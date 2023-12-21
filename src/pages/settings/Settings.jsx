import "./Settings.css"
import SideBar from "../../components/sidebar/SideBar"


export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitles">Update Your Acount</span>
            <span className="settingsDeleteTitles">Delete Your Account</span>
        </div>
        <form className="settingsForm">
            <label htmlFor=""></label>
        </form>
      </div>
      <SideBar />
    </div>
  )
}
