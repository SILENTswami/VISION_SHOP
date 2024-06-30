import React, { useState, useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '../Body.css'; 

const Body = () => {
  const [expandedVideo, setExpandedVideo] = useState(null);
  const [firstTime,setFirstTime]=useState(false)
  const videoRefs = {
    video2: useRef(null),
    video3: useRef(null)
  };

  const handleExpandVideo = (videoId) => {

    
    if (expandedVideo === null) // nothing is open
    {
      setFirstTime(true);
      setExpandedVideo(videoId === expandedVideo ? null : videoId); 
    }
    
  };

  const handlePause=(videoId)=>{
    //extract id and time stamp
    //add json reqs to backend
    if(expandedVideo !== null){//smthing is open
      if (videoRefs[videoId].current) {
        const t1=videoRefs[videoId].current.currentTime;
        setTimeout(() => {
          console.log("2ms later...");
          if(t1===videoRefs[videoId].current.currentTime&&firstTime===false)
            console.log(`Current time of ${videoId}:`, videoRefs[videoId].current.currentTime);
          if(firstTime)
            setFirstTime(false);
        }, 250);//needed for the process to work 
      }

      }
  }
  const handleCloseVideo = () => {
    setExpandedVideo(null);
  };

  useEffect(() => {
    Object.keys(videoRefs).forEach(videoId => {
      if (videoRefs[videoId].current) {
        if (expandedVideo === videoId) {
          videoRefs[videoId].current.play();
        } else {
          videoRefs[videoId].current.pause();
        }
      }
    });
  }, [expandedVideo]);

  return (
    <div className="body-container" style={{ maxWidth: '80%', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom textAlign={'center'} color={'black'} fontSize={'3rem'}>
        Welcome! <br />
      </Typography>

      <Typography variant="body3" textAlign={'center'} color={'black'} paragraph>
      Our enhanced Amazon Prime Video X-ray feature! Now, you can effortlessly search for similar products showcased in video content right from the website. Utilizing advanced visual AI technology, our system detects objects within video frames and matches them with corresponding products, offering you a seamless and enriched shopping experience.
      </Typography>

      {/* Videos Section */}
      <div className="videos-section">
        <Typography variant="h6" gutterBottom color={'black'} marginBottom={3}>
          Featured / Sample Videos
        </Typography>

        <Grid container spacing={3} justifyContent="center" padding={0}>
          {/* Video 2 */}
          <Grid item xs={11} md={5} padding={0}> 
            <div
              className={`video-wrapper ${expandedVideo === 'video2' ? 'expanded' : ''}`}
              onClick={() => handleExpandVideo('video2')}
              >
              <video
                ref={videoRefs.video2}
                controls
                width="100%"
                height="315"
                style={{ borderRadius: '15px', background: 'black' }}
                onPause={()=>{
                  handlePause('video2')}}
              >
                <source src="src/assets/Images/lol.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Grid>

          {/* Video 3 */}
          <Grid item xs={11} md={5}>
            <div
              className={`video-wrapper ${expandedVideo === 'video3' ? 'expanded' : ''}`}
              onClick={() => handleExpandVideo('video3')}
            >
              <video
                ref={videoRefs.video3}
                controls
                width="100%"
                height="315"
                style={{ borderRadius: '15px', background: 'black' }}
               
                onPause={()=>{
                  handlePause('video3')}}
              >
                <source src="src/assets/Images/lol.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Grid>
        </Grid>

        {/* Video Overlay */}
        {expandedVideo!==null && (
          <div className="video-overlay" onClick={handleCloseVideo}></div>
        )}
      </div>
    </div>
  );
};

export default Body;
