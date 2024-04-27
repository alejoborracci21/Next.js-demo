import { Lusitana, Inter } from "next/font/google";
import Link from "next/link";
import styles from "./layout.module.css"
import Searchbar from "@/Components/search/search";


export const lusitana = Lusitana({ subsets: ["latin"], weight: "400", display: "swap"});


export default function Layout({ children }) {
  return (
    <html lang="en" className={lusitana.className}>
      <body className={styles.body}>
        <div className={styles.searchbar}>
          <Searchbar />
        </div>
        <div className={styles.children}>{children}</div>
        <div className={styles.boxnav}>
            <img className={styles.logo} src="youtube.png" alt="youtube"/>
          <div className={styles.nav}>
            <Link href={"/home"}>
              <button className={styles.button}>Home</button>
            </Link>
            <Link href={"/home/about"}>
              <button className={styles.button}>About</button>
            </Link>
            <Link href={"/home/profile"}>
              <button className={styles.button}>My profile</button>
            </Link>
            <Link href={"/home/channels"}>
              <button className={styles.button}>Channels</button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

