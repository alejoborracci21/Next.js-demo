import Image from "next/image";
import styles from "./page.module.css";
import Searchbar from "@/Components/search/search";

export default function Home() {
  return (
    <main>
      <Searchbar/>
      <div className={styles.container1}>Homepage (children)</div>
    </main>
  );
}
