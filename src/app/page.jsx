import Searchbar from "@/Components/search/search";
import styles from './page.module.css'

export default function page() {
    return (
      <main>
        <Searchbar />

        <div className={styles.container}>Homepage</div>
      </main>
    );
}