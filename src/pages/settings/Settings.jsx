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
            <label >Profile Picture</label>
            <div className="settingsPP">
              <img src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="settingsImg" />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" className="fileInput" id="fileInput" style={{display:"none" }}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Your Name (Huzaifa Nizam)" />
            <label>Email</label>
            <input type="text" placeholder="Your Email (abc@gmail.com)" />
            <label>Password</label>
            <input type="password"/>
            <button className="settingSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  )
}
