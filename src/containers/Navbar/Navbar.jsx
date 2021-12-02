import styles from "./Navbar.module.scss";
import Search from "./../../components/Search";
import ResultsNum from "../../components/ResultsNum/ResultsNum";

const Navbar = ({ click, search, maxResults, totalResults }) => {
	return (
		<div className={styles.Navbar}>
			{totalResults !== 0 ? (
				<p>Found {totalResults} results.</p>
			) : (
				<p>No results found.</p>
			)}
			<Search click={click} search={search} />
			<ResultsNum maxResults={maxResults} />
		</div>
	);
};

export default Navbar;
