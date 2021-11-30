import styles from './App.module.scss';
import Navbar from "./containers/Navbar"
import ResultContainer from "./containers/ResultContainer"
import { useState, useEffect } from 'react';

function App() {


  const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=";

  const [booksList, setBooksList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a")
  const [searchTime, setSearchTime] = useState(false)
  
  const getBooks = async (searchTerm = "a") => {
      const response = await fetch(`${GOOGLE_BOOKS_URL}${searchTerm}`);
      const data = await response.json();
      const items = await data.items;
      setBooksList(items)
  }

  const handleClick = () => {
    setSearchTime(!searchTime)
  }

  const handleUpdate = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
      getBooks(searchTerm);
    }, [searchTime]);

  return (
    <div className={styles.App}>
      <Navbar click={handleClick} update={handleUpdate}/>
      <ResultContainer data={booksList}/>
    </div>
  );
}

export default App;
