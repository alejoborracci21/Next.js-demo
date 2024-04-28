import Searchbar from '@/Components/search/search';
import styles from './page.module.css'
import VideoPlayer from '@/Components/videoplayer/videoplayer';

export default function MyApp() {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <h3 className={styles.title}>Music</h3>
        <div className={styles.videoContainer}>
          <VideoPlayer id="fJ8nAaC8dDY"/>
          <VideoPlayer id="fJ8nAaC8dDY"/>
          <VideoPlayer id="fJ8nAaC8dDY"/>
        </div>
      </div>
    
      <div className={styles.list}>
        <h3 className={styles.title}>Technology</h3>
        <div className={styles.videoContainer}>
          <VideoPlayer id="fJ8nAaC8dDY"/>
          <VideoPlayer id="fJ8nAaC8dDY"/>
          <VideoPlayer id="fJ8nAaC8dDY"/>
        </div>
      </div>

      <div className={styles.list}>
        <h3 className={styles.title}>Sunrises</h3>
        <div className={styles.videoContainer}>
          <VideoPlayer id="fJ8nAaC8dDY"/>
          <VideoPlayer id="fJ8nAaC8dDY"/>
          <VideoPlayer id="fJ8nAaC8dDY"/>
        </div>
      </div>

      <div className={styles.list}>
        <h3 className={styles.title}>Sunrises</h3>
        <div className={styles.videoContainer}>
          <VideoPlayer id="fJ8nAaC8dDY"/>
          <VideoPlayer id="fJ8nAaC8dDY"/>
          <VideoPlayer id="fJ8nAaC8dDY"/>
        </div>
      </div>

      <div className={styles.list}>
        <h3 className={styles.title}>Sunrises</h3>
        <div className={styles.videoContainer}>
          <VideoPlayer id="fJ8nAaC8dDY"/>
          <VideoPlayer id="fJ8nAaC8dDY"/>
          <VideoPlayer id="fJ8nAaC8dDY"/>
        </div>
      </div>
      
    </div>
  );
}
