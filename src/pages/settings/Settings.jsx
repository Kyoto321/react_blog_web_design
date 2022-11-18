import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                    <img className="profileImg"
                        src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-default-avatar-png-image_5405355.jpg"
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa fa-user-circle"/>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label className="settingsFormLabel">Username</label>
                    <input className="settingsFormInput" type="text" paceholder="John Doe" />
                    <label className="settingsFormLabel">Email</label>
                    <input className="settingsFormInput" type="text" paceholder="jondnoe54345@gmail.com" />
                    <label className="settingsFormLabel">Username</label>
                    <input className="settingsFormInput" type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}