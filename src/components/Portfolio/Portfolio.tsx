import styles from "./Portfolio.module.css";

export default function Portfolio() {
	return (
		<div className={styles.portfolio}>
			<a href="http://dev.geekportal.org/" target="_blank">
				<div className={styles.portfolio__item}>
					<div className={styles.item__img}>
						<img src="./portfolio/geek.png" alt="lending" />
					</div>
					<p className={styles.item__title}>Geekportal | Laravel, Vue</p>
				</div>
			</a>
			<a
				href="https://yuriugavrikov.github.io/lending-ui-ux-designer/"
				target="_blank"
			>
				<div className={styles.portfolio__item}>
					<div className={styles.item__img}>
						<img src="./portfolio/lending.png" alt="lending" />
					</div>
					<p className={styles.item__title}>Landing page | HTML, CSS, JS</p>
				</div>
			</a>
			<a
				href="https://yuriugavrikov.github.io/weather-forecast-Vue3/"
				target="_blank"
			>
				<div className={styles.portfolio__item}>
					<div className={styles.item__img}>
						<img src="./portfolio/weather.png" alt="weather" />
					</div>
					<p className={styles.item__title}>Weather app | Vue3, SASS</p>
				</div>
			</a>
		</div>
	);
}
