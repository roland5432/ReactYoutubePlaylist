import React from 'react';
import '../style/video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-itemitem'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div div className='header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};

export default VideoItem;