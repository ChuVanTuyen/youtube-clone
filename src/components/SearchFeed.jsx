import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);
    return (
        <div className="containers" style={{ overflowY: 'auto', height: '90vh', flex: '1' }}>
            <h4 style={{ marginLeft: "10px" }}>
                Search results for: <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
            </h4>
            <Videos videos={videos} />
        </div>
    )
}

export default SearchFeed