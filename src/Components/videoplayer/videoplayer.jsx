'use client'


import styles from './video.module.css';
import ReactPlayer from 'react-player/youtube';

export default function VideoPlayer({id}) {

  const videoURL = `https://www.youtube.com/watch?v=${id}`;

  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <ReactPlayer
          url={videoURL}
          controls={true}
          width="80%"
          height="100%"
        />
      </div>
    </div>
  );
}
