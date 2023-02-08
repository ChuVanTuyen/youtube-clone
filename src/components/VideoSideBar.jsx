import { Link } from 'react-router-dom';

import { demoThumbnailUrl, demoVideoTitle, demoChannelTitle, demoVideoUrl, demoChannelUrl } from '../utils/constants';
import { BsCheckCircleFill } from 'react-icons/bs';
import './Style/VideoSideBar.scss';

const VideoSideBar = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <div className='video-side-bar'>
            <div className='videoBar-img'>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt="" />
                </Link>
            </div>
            <div className='videoBar-title'>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <span>
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}...
                    </span>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <p>{snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)} <BsCheckCircleFill /></p>
                </Link>
            </div>
        </div>
    )
}

export default VideoSideBar