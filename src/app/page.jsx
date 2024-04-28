import Searchbar from '@/Components/search/search';
import styles from './page.module.css'
import VideoPlayer from '@/Components/videoplayer/videoplayer';

export default function MyApp() {
  return (
    <div className={styles.container}>
      <div className={styles.video}>
        <VideoPlayer/>
      </div>
    </div>
  );
}

