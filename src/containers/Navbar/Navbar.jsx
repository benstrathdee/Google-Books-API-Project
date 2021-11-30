import styles from "./Navbar.module.scss"
import Search from "./../../components/Search"
import PageSelector from "../../components/PageSelector/PageSelector"
import ResultsNum from "../../components/ResultsNum/ResultsNum"

const Navbar = ({click, update}) => {
    return (
        <div className={styles.Navbar}>
            <Search click={click} update={update}/>
            <PageSelector />
            <ResultsNum />
        </div>
    )
}

export default Navbar
