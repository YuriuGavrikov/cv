import styles from "./Loader.module.css";

export default function Loader() {
	return (
		<img className={styles.loaderImg} src="./img/loading.gif" alt="loading" />
	);
}
