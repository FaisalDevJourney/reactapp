import './post.css'
import { Favorite, MoreVert, ThumbUp } from '@mui/icons-material'
import {useState, useEffect} from 'react'
import axios from "axios"
import {format} from "timeago.js"
import {Link} from 'react-router-dom'
export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] = useState({});

    useEffect(() => {
       const fetchUser = async ()=>{
        const res = await axios.get('/users?userId='+post.userId);
        setUser(res.data);
    };
    fetchUser();
    },[post.userId])

    const likeHandler = ()=>{
        setLike(isLiked? like-1: like+1)
        setIsLiked(!isLiked);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={'/profile/'+user.username}>
                        <img src={user.profilePicture || PF+"defaultAvatar.png"} alt="" className="postProfileImg" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                    <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF+post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp onClick={likeHandler}  className="postLikeIcon"/>
                        <Favorite onClick={likeHandler}  className="postHeartIcon"/>
                        <span className="postLikeCounter">{like} people liked the post! </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
