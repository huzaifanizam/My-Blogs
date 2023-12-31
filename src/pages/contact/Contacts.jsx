import SideBar from "../../components/sidebar/SideBar"
import "./Contacts.css"

export default function Contacts() {
  return (
    <>
    <div className="contacts">
        <div className="contactDiv">

       <img
       className="contactsImg"
          src="https://images.pexels.com/photos/225232/pexels-photo-225232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          />
      <form  className="contactsForm">
        <div className="contactsFormGroup">
            <label htmlFor="fileInput">
            {/* <i className="contactsIcon fa-solid fa-plus"></i> */}
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Full Name" className="contactsInput" autoFocus={true}/>
        </div>
        <div className="contactsFormGroup">
            <label htmlFor="fileInput">
            {/* <i className="contactsIcon fa-solid fa-plus"></i> */}
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="E-mail" className="contactsInput" autoFocus={true}/>
        </div>
        <div className="contactsFormGroup">
          <textarea placeholder="Your Message..." typeof="text" className="contactsInput contactsText"></textarea>
        </div>
        <button className="contactsSubmit" >Contact Us</button>
      </form>
      </div>
      <SideBar/>

    </div>
    </>

  )
}
