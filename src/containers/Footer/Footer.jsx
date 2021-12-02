import styles from "./Footer.module.scss";
import PageSelector from "../../components/PageSelector/PageSelector";

const Footer = ({ pagesToList, handlePages }) => {
	return (
		<div className={styles.Footer}>
			<PageSelector pagesToList={pagesToList} handlePages={handlePages} />
		</div>
	);
};

export default Footer;
