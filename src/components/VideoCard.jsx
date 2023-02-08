import { Link } from 'react-router-dom';

import { demoThumbnailUrl, demoVideoTitle, demoChannelTitle, demoVideoUrl, demoChannelUrl } from '../utils/constants';
import { BsCheckCircleFill } from 'react-icons/bs';
import './Style/VideoCard.scss';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <div className='video-card'>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt="" />
            </Link>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <h6>
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}...
                </h6>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <p>{snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)} <BsCheckCircleFill /></p>
            </Link>
        </div>
    )
}

export default VideoCard;