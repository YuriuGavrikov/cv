import styles from "./Portfolio.module.css";

export default function Portfolio() {
	return (
		<div className={styles.portfolio}>
			<a
				href="https://yuriugavrikov.github.io/lending-ui-ux-designer/"
				target="_blank"
			>
				<div className={styles.portfolio__item}>
					<h3 className={styles.item__title}>Landing page | HTML, CSS, JS </h3>
					<div className={styles.item__img}>
						<img src="./portfolio/lending.png" alt="lending" />
					</div>
				</div>
			</a>
			<a
				href="https://yuriugavrikov.github.io/weather-forecast-Vue3/"
				target="_blank"
			>
				<div className={styles.portfolio__item}>
					<h3 className={styles.item__title}>Weather app | Vue3, SASS </h3>
					<div className={styles.item__img}>
						<img src="./portfolio/weather.png" alt="weather" />
					</div>
				</div>
			</a>
		</div>
	);
}
