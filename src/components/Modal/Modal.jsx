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
				<div className={styles.Modal_thumbwrapper}>
					<img
						src={content[6]}
						alt=""
						className={styles.Modal_thumb}
					/>
				</div>
				<div className={styles.Modal_body}>
					<h3>{content[0]}</h3>
					<h4>{content[2]}</h4>
					<h5>by {authorList}</h5>
					<p>Released: {content[3] ? content[3] : "--"}</p>
					<p>{content[4] ? content[4] : "--"} pages</p>
					<a href={content[5]}>View on Google Books</a>
				</div>
				<div className={styles.Modal_footer}>
					<button className={styles.Modal_close} onClick={modalOp}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
