'use client'


import styles from './video.module.css';
import ReactPlayer from 'react-player/youtube';

export default function VideoPlayer() {

  const videoURL = "https://www.youtube.com/watch?v=fLzU21ltH4U";
  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <ReactPlayer
          url={videoURL}
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
