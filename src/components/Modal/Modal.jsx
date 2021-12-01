import styles from "./Modal.module.scss";

const Modal = ({ modalOp, showModal, content }) => {
	if (!showModal) {
		return "null";
	}
	const authorList =
		content[1] === undefined
			? "Author Unknown"
			: content[1].length > 1
			? content[1].join(", ")
			: content[1];

	return (
		<div className={styles.Modal}>
			<div className={styles.Modal_content}>
				<div className={styles.Modal_header}>
					<h3>{content[0]}</h3>
				</div>
				<div className={styles.Modal_body}>
					<h5>{content[2]}</h5>
					<h4>by {authorList}</h4>
					<p>{content[3]}</p>
					<p>{content[4]}</p>
					<a href={content[5]}>Preview on Google Books</a>
				</div>
				<div className={styles.Modal_footer}>
					<button onClick={modalOp}>Close</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
