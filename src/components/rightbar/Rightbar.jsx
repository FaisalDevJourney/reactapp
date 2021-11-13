import './rightbar.css'
import Online from '../online/Online'
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Rightbar({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        const getFriends = async ()=>{
            try{
                const friendList = await axios.get("/users/friends/"+ user._id);
                setFriends(friendList.data);
            }catch(err){
                console.log(err);
            }
        };
        getFriends();
    }, [user]);
    const HomeRightbar = ()=>{
        return(
            <>
              <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>ahmed</b> and <b>2 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {/* {user.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))} */}
                </ul>
            </>
        );
    };

    const ProfileRightbar = ()=>{
        return(
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">{user.relationship}</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                {friends.map((friend)=>(
                <div className="rightbarFollowing">
                    <img src={friend.profilePicture? PF+friend.profilePicture : PF+ "defaultAvatar.png"} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">{friend.username}</span>
                </div>
                ))}
            </div>
            </>
            )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
              {user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}
