import React from 'react'
import { Link } from 'react-router-dom';

import { demoProfilePicture } from "../utils/constants";
import { BsCheckCircleFill } from 'react-icons/bs';
import './Style/ChannelCard.scss';

const ChannelCard = ({ channelDetail, marginTop }) => {
    console.log(channelDetail);
    return (
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <div className='channel-card' style={{ marginTop: marginTop }}>
                <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt="" />
                <h4>{channelDetail?.snippet?.title} <BsCheckCircleFill /></h4>
                {channelDetail?.statistics?.subcriberCounts &&
                    <p>{parseInt(channelDetail?.statistics?.subcriberCounts).toLocaleString()}
                        Subcribers
                    </p>
                }
            </div>
        </Link>
    )
}

export default ChannelCard