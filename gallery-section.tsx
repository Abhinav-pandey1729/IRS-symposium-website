import React from 'react';

const GallerySection = () => {
    return (
        <div className="gallery">
            <h2>Video Gallery</h2>
            <div className="video-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/XBi3ZuDLm70" title="Video 1" />
                </div>
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/8IxRjPNg3OI" title="Video 2" />
                </div>
            </div>
        </div>
    );
};

export default GallerySection;