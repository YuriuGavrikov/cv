import styles from "./Hello.module.css";

export default function Hello() {
	return (
		<div className={styles.hello}>
			<div className={styles.hello__greeting}>
				<h1 className={styles.greeting__title}>
					Юрий Гавриков<span>.</span>
				</h1>
				<span>
					<p>Я Frontend developer из Санкт-Петербурга.</p>
					<p>
						В настоящее время я изучаю веб технологии и разрабатываю свои
						проэкты.
					</p>
					<p>Хочу найти работу и повысить свои навыки веб-разработчика.</p>
				</span>
				<div className={styles.greeting__contacts}>
					<div className={styles.greeting__contacts_item}>
						<p>PHONE</p>
						<p>TELEGRAM</p>
						<p>ADDRESS</p>
					</div>
					<div className={styles.greeting__contacts_content}>
						<p>+7 981 9583833</p>
						<p>@kyripokamolodoy</p>
						<p>Saint Petersburg, Russia</p>
					</div>
				</div>
				<div className={styles.greeting__buttons}>
					<button
						className={styles.button + " " + styles.button__contact_me}
						type="button"
					>
						Связаться со мной
					</button>
					<button
						className={styles.button + " " + styles.button__download_cv}
						type="button"
					>
						Скачать CV
					</button>
				</div>
			</div>
			<div className={styles.hello__img}>
				<img className={styles.photo} src="./img/hello.jpg" alt="" />
			</div>
		</div>
	);
}
