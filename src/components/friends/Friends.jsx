import './friend.css'

export default function Friends({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImage" src={user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
