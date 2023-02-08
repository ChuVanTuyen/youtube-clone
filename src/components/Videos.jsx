import React from 'react'

import { VideoCard, ChannelCard, VideoSideBar } from '../components';

const Videos = ({ videos, VideoSB }) => {
    return (
        <div className='row feed-videos'>
            {videos.map((item, index) => (
                <>
                    {
                        item.id.videoId &&
                        <>
                            {VideoSB ? <VideoSideBar video={item} /> :
                                <div className='col-sm-6 col-md-4' key={index}>
                                    <VideoCard video={item} />
                                </div>
                            }
                        </>
                    }
                    {
                        item.id.channelId &&
                        <div className='col-sm-6 col-md-4' key={index}>
                            <ChannelCard channelDetail={item} />
                        </div>
                    }
                </>
            ))}
        </div>
    )
}

export default Videos