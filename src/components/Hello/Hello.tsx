import { useState } from "react";
import styles from "./Hello.module.css";
import Modal from "../Modal/Modal";
// import TheButton from "../generic/TheButton/TheButton";
import TheButtonDesigner from "../generic/TheButtonDesigner/TheButtonDesigner";

export default function Hello() {
	const [isModal, setIsModal] = useState<boolean>(false);
	return (
		<div className={styles.hello}>
			<div className={styles.hello__img}></div>
			<div className={styles.hello__greeting}>
				<div className={styles.greeting}>
					<h1 className={styles.greeting__title}>
						Юрий Гавриков<span>.</span>
					</h1>
					<span>
						<p>Я Frontend developer из Санкт-Петербурга.</p>
						<p>
							В настоящее время я изучаю веб технологии и разрабатываю свои
							проекты.
						</p>
						<p>Хочу найти работу и повысить свои навыки веб-разработчика.</p>
					</span>
				</div>
				<div className={styles.greeting}>
					<div className={styles.greeting__contacts}>
						<div className={styles.greeting__contacts_item}>
							<p>PHONE</p>
							<p>TELEGRAM</p>
							<p>ADDRESS</p>
						</div>
						<div className={styles.greeting__contacts_content}>
							<a href="tel:+79819583833">+7(981)9583833</a>
							<a href="https://t.me/yuriu_gavrikov">@yuriu_gavrikov</a>
							<p>Saint Petersburg, Russia</p>
						</div>
					</div>

					<div className={styles.greeting__buttons}>
						<TheButtonDesigner setIsModal={setIsModal}>
							Связаться со мной
						</TheButtonDesigner>
						{/* <TheButton>Скачать CV</TheButton> */}
					</div>
				</div>
			</div>

			{isModal && <Modal setIsModal={setIsModal} />}
		</div>
	);
}
