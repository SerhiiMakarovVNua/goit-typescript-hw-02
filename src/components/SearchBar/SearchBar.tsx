import styles from "./SearchBar.module.css";

import { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <div>
      <Toaster />
      <header className={styles.searchBar}>
        <form className={styles.inputSearch} onSubmit={onSubmit}>
          <input
            className={styles.inputSearch}
            type="text"
            name="searchBarInput"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={styles.buttonSearch}>Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;