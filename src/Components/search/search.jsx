import Link from 'next/link';
import styles from './search.module.css'

const user = false

export default function Searchbar() {
    return (
      <div className={styles.searchbar}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search"
            className={styles.input}
          ></input>
          <button type="submit" className={styles.button}>
            🔍
          </button>
        </div>

        <div className={styles.fotocontainer}>
          {user ? (
            <img className={styles.foto} src={user.image} alt="user" />
          ) : (
            <Link href={"/login"}>
              <img src="login.png" className={styles.foto} alt="login" />
            </Link>
          )}
        </div>
      </div>
    );
}