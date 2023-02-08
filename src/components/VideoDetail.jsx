import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { BsCheckCircleFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';

import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import "./Style/VideoDetail.scss";

const VideoDetail = () => {
    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const VideoSideBar = "ok";

    useEffect(() => {
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]));

        fetchFromApi(`search?part=snippet&realatedVideoId=${id}&type=video`)
            .then((data) => setVideos(data?.items))
    }, [id]);
    if (!videoDetail?.snippet) { return 'Loading...' }
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
    return (
        <div className='row containers'>
            <div className='col-lg-8 video-play'>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                <h5 color="white" variant="h5" p={2} fontWeight="bold">
                    {title}
                </h5>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Link to={`channel/${channelId}`} style={{ color: "#555" }}>
                        <p>
                            {channelTitle} <BsCheckCircleFill />
                        </p>
                    </Link>
                    <div>
                        <span style={{ display: "inline-block", marginRight: "10px" }}>
                            {parseInt(viewCount).toLocaleString()} views
                        </span>
                        <span>
                            {parseInt(likeCount).toLocaleString()} likes
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                {videos && <Videos videos={videos} VideoSB={VideoSideBar} direction="column" />}
            </div>
        </div>
    )
}

export default VideoDetail