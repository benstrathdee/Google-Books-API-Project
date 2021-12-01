import styles from "./ResultsNum.module.scss";

const ResultsNum = ({ maxResults }) => {
	return (
		<div className={styles.ResultsNum}>
			<p>Results per page: </p>
			<select className={styles.ResultsNum_select} onChange={maxResults}>
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="30">30</option>
				<option value="40">40</option>
			</select>
		</div>
	);
};

export default ResultsNum;
