import styles from "./TheFooter.module.css";

export default function TheFooter() {
	return (
		<footer className={styles.footer}>
			<a href="https://github.com/YuriuGavrikov" target="_blank">
				<div>GitHub</div>
			</a>

			<div>2024</div>
		</footer>
	);
}
