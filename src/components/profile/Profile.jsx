import './profile.css'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img className="profileCoverImg" src={PF+'i1.jpg'} alt="" />
                        <img className="profileUserImg" src={PF+'1.jpg'} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Sally Jones</h4>
                            <span className="profileInfoDesc">Welcome to my profile</span>
                        </div>
                    </div>
                        <div className="profileRightBottom">
                            <Feed username="sally"/>
                            <Rightbar profile/>
                        </div>
                    
                </div>

            </div>
        </>
    )
}
