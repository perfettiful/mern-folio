import React from 'react';
import { trackExternalLink, trackVideoPlay } from '../utils/analytics';

const YouTube = () => {
  const handleChannelClick = () => {
    trackExternalLink('https://www.youtube.com/@perfetti_codes', 'YouTube Channel');
  };

  const handleVideoClick = () => {
    trackExternalLink('https://www.youtube.com/watch?v=A9zyUUNqugs', 'YouTube Video');
  };

  const handleVideoPlay = () => {
    trackVideoPlay('Latest Development Tutorial');
  };

  return (
    <div className="youtube-section">
      <div className="card shadow mx-auto mt-4 mb-4">
        <div className="card-body text-center">
          <h4 className="title mb-4">Check Out My Latest Video</h4>
          <p className="card-text mb-4">
            I create coding tutorials and share development insights on my YouTube channel. 
            Here's my latest video where I dive into modern web development techniques.
          </p>
          
          <div className="video-container mb-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/A9zyUUNqugs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="youtube-iframe"
            ></iframe>
          </div>
          
          <div className="youtube-links">
            <a
              href="https://www.youtube.com/@perfetti_codes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-youtube me-3"
              onClick={handleChannelClick}
            >
              <i className="fab fa-youtube"></i>
              Subscribe to My Channel
            </a>
            <a
              href="https://www.youtube.com/watch?v=A9zyUUNqugs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-youtube"
              onClick={handleVideoClick}
            >
              <i className="fas fa-play"></i>
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
