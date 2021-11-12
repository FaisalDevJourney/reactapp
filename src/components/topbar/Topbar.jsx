import "./topbar.css"
import {Chat, Notifications, Person, Search} from "@mui/icons-material"
import {Link} from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
export default function Topbar() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
           <div className="topbarLeft">
               <Link to="/" style={{ textDecoration: 'none' }} >
               <span className="logo">SocialApp</span>
               </Link>
           </div>
           <div className="topbarCenter">
               <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input placeholder="search for a friend, post or a video" className="searchInput" />
               </div>
           </div>
           <div className="topbarRight">
               <div className="topbarLinks">
                <span className="topbarLink">HomePage</span>
                <span className="topbarLink">Timeline</span>
               </div>
               <div className="topbarIcons">
                   <div className="topbarIconItem"><Person/>
                   <span className="itemIconBadge">1</span>
                   </div>
                   <div className="topbarIconItem"><Chat/>
                   <span className="itemIconBadge">2</span>
                   </div>
                   <div className="topbarIconItem"><Notifications/>
                   <span className="itemIconBadge">1</span>
                   </div>
               </div>
               <Link to={"/profile/"+user.username}>
               <img src={user.profilePicture? PF+user.profilePicture : PF+"defaultAvatar.png"} alt="" className="profilePicture" />
               </Link>
           </div>
        </div>
    )
}
