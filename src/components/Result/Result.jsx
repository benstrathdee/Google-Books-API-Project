import styles from "./Result.module.scss";

const Result = ({
	title,
	authors,
	thumbnail,
	desc,
	release,
	pages,
	link,
	modalOp,
	modalContent,
}) => {
	const sendToModal = () => {
		modalContent([title, authors, desc, release, pages, link]);
		modalOp();
	};

	const truncateString = (str, num, end) => {
		if (str.length <= num) {
			return str;
		}
		return str.slice(0, num) + end;
	};

	const authorList =
		authors === undefined
			? "Author Unknown"
			: authors.length < 3
			? authors.join(", ")
			: `${authors[0]} et al.`;

	return (
		<div className={styles.ResultCard} onClick={sendToModal}>
			<h2>{truncateString(title, 50, "...")}</h2>
			<h6>{truncateString(authorList, 40, "...")}</h6>
			<img src={thumbnail} alt="" className={styles.ResultCard_thumb} />
		</div>
	);
};

export default Result;
