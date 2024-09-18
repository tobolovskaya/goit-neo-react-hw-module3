import styles from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)} 
      />
    </div>
  );
};

export default SearchBox;
