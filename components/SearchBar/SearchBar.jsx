import styles from './searchBar.module.css';

export default function SearchBar({
  searchInput,
  handleSearchChange,
  searchOnSubmit,
}) {
  return (
    <form className={styles.formContainer} onSubmit={(e) => searchOnSubmit(e)}>
      <input
        className={styles.searchInput}
        type='search'
        name='name'
        placeholder='Search'
        value={searchInput}
        onChange={(e) => handleSearchChange(e)}
      />
      <input className={styles.searchSubmit} type='submit' value='Enter' />
    </form>
  );
}
