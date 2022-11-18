
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImage"
                    src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-default-avatar-png-image_5405355.jpg"
                    alt="" />
                <p className="sidebarparagaph">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Labore dolores voluptas architecto libero, ducimus dolor mollitia quod, 
                    aliquid accusantium est repellat magnam .
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Growing Up</li>
                    <li className="sidebarListItem">Style & Fashion</li>
                    <li className="sidebarListItem">Interest</li>
                    <li className="sidebarListItem">Parenting</li>

                </ul>
            </div>

            <div className="siderbarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
} 