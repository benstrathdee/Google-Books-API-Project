import styles from "./Navbar.module.scss";
import Search from "./../../components/Search";
import PageSelector from "../../components/PageSelector/PageSelector";
import ResultsNum from "../../components/ResultsNum/ResultsNum";

const Navbar = ({ click, search, maxResults }) => {
	return (
		<div className={styles.Navbar}>
			<Search click={click} search={search} />
			<PageSelector />
			<ResultsNum maxResults={maxResults} />
		</div>
	);
};

export default Navbar;
