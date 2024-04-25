import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container1}>
        Homepage
      </div>

      <div className={styles.container2}>
        componente
      </div>
    </main>
  );
}
