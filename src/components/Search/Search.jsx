import styles from "./Search.module.scss"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Search = ({click, update}) => {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    return (
        <div>
            <input type="text" onChange={update} className={styles.Search_input}/>
            <button onClick={click} className={styles.Search_btn}>{searchIcon}</button>
        </div>
    )
}

export default Search
