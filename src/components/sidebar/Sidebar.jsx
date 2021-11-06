import './sidebar.css'
import {Bookmark, CastForEducation, Chat, Event, Group, QuestionAnswer, RssFeed, VideoCall, Work} from "@mui/icons-material"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoCall className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionAnswer className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <CastForEducation className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/1.jpg" alt="" />
                        <span className="sidebarFriendName">sally joe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/1.jpg" alt="" />
                        <span className="sidebarFriendName">sally joe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/1.jpg" alt="" />
                        <span className="sidebarFriendName">sally joe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/1.jpg" alt="" />
                        <span className="sidebarFriendName">sally joe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImage" src="/assets/1.jpg" alt="" />
                        <span className="sidebarFriendName">sally joe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
