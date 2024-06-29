import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '../Body.css'; // Import your custom CSS for styling

const Body = () => {
  const [expandedVideo, setExpandedVideo] = useState(null);

  const handleExpandVideo = (videoId) => {
    setExpandedVideo(videoId === expandedVideo ? null : videoId);
  };

  const handleCloseVideo = () => {
    setExpandedVideo(null);
  };

  return (
    <div className="body-container">
      <Typography variant="h5" gutterBottom>
        Welcome to our website! <br />
        <Typography variant='h6'>Project Overview</Typography>
      </Typography>

      <Typography variant="body3" paragraph>
        We have enhanced Amazon Prime Video's X-ray feature to allow users to search for similar products featured in video content directly on the website. By leveraging advanced visual AI technology, our system identifies objects in video frames and finds matching products for an improved shopping experience.
      </Typography>

      {/* Videos Section */}
      <div className="videos-section">
        <Typography variant="h6" gutterBottom>
          Featured / Sample Videos
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {/* Video 1 */}
          <Grid item xs={11} md={5}>
            <div
              className={`video-wrapper ${expandedVideo === 'video1' ? 'expanded' : ''}`}
              onClick={() => handleExpandVideo('video1')}
            >
              <video
                controls
                width="100%"
                height="315"
                style={{ borderRadius: '15px' }}
              >
                <source src="src/assets/Images/amazon_project.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Grid>

          {/* Video 2 */}
          <Grid item xs={11} md={5}>
            <div
              className={`video-wrapper ${expandedVideo === 'video2' ? 'expanded' : ''}`}
              onClick={() => handleExpandVideo('video2')}
            >
              <video
                controls
                width="100%"
                height="315"
                style={{ borderRadius: '15px' }}
              >
                <source src="path_to_your_video/video1.mp4" type="video.mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Grid>

          {/* Video 3 (YouTube) */}
          <Grid item xs={11} md={5}>
            <div
              className={`video-wrapper ${expandedVideo === 'video3' ? 'expanded' : ''}`}
              onClick={() => handleExpandVideo('video3')}
            >
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/YVWHj1WTSbc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '15px' }}
              ></iframe>
            </div>
          </Grid>

          {/* Video 4 (YouTube) */}
          <Grid item xs={11} md={5}>
            <div
              className={`video-wrapper ${expandedVideo === 'video4' ? 'expanded' : ''}`}
              onClick={() => handleExpandVideo('video4')}
            >
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/hsm4poTWjMs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '15px' }}
              ></iframe>
            </div>
          </Grid>
        </Grid>

        {/* Video Overlay */}
        {expandedVideo && (
          <div className="video-overlay" onClick={handleCloseVideo}></div>
        )}
      </div>
    </div>
  );
};

export default Body;
