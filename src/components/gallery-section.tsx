import React from 'react';

const GallerySection: React.FC = () => {
    return (
        <div className="gallery-section">
            <h2>Video Gallery</h2>
            <div className="video-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/XBi3ZuDLm70"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8IxRjPNg3OI"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default GallerySection;