import styles from './search.module.css'



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
          <div className={styles.foto}></div>
        </div>
      </div>
    );
}