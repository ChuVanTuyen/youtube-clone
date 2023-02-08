import { useEffect, useState } from 'react';

import { fetchFromApi } from "../utils/fetchFromApi";
import { Videos, SideBar } from '../components';
import './Style/Feed.scss';
import { categories } from '../utils/constants';
const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState();

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])
    console.log(videos);

    return (
        <div className="containers row g-0 feed">
            <div className='col-md-2 categories'>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </div>
            <div className='col-md-10'>
                <h2 className='feed-title'>
                    <span style={{ color: "red" }}>{selectedCategory}</span> videos
                </h2>
                {videos && <Videos videos={videos} />}
            </div>
        </div>
    )
}

export default Feed