import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";
import "./Style/channelDetail.scss";

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([])
    const { id } = useParams();
    const marginTop = "-95px";
    useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`)
            .then((data) => { setChannelDetail(data?.items[0]) })

        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => { setVideos(data?.items) })
    }, [id])
    return (
        <div>
            <div>
                <div className="channel-bg"></div>
                <ChannelCard channelDetail={channelDetail} marginTop={marginTop} />
            </div>
            <Videos videos={videos} />

        </div>
    )
}

export default ChannelDetail;