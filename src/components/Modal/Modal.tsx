import { useState, useEffect } from "react";
import styles from "./Modal.module.css";

import SuccessCard from "../generic/Success/SuccessCard";

import axios from "axios";

type Props = {
	setIsModal: (value: boolean) => void;
};

export default function Modal(props: Props) {
	const [theName, setTheName] = useState("");
	const [nameTg, setNameTg] = useState("");
	const [introduction, setIntroduction] = useState("");
	const [formValid, setFormValid] = useState(true);
	const [SuccessSend, SetSuccessSend] = useState(false);

	useEffect(() => {
		theName && nameTg && introduction
			? setFormValid(false)
			: setFormValid(true);
	}, [theName, nameTg, introduction]);

	const handleSetName = (value: string) => {
		setTheName(value);
	};
	const handleSetNameTg = (value: string) => {
		setNameTg(value);
	};
	const handleSetIntroduction = (value: string) => {
		setIntroduction(value);
	};

	const submitMessage = () => {
		const TOKEN = "6278851300:AAHEwQBj6GQ34KS-vQ6_L5ej_g--UQO6N8A";
		const CHAT_ID = "-1001807655173";
		const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

		let message = `<b>Заявка с сайта:</b>\n`;
		message += `<b>Имя: </b>${theName}\n`;
		message += `<b>Телега: </b>https://t.me/${nameTg}\n`;
		message += `<b>Сообщение: </b>${introduction}\n`;

		axios
			.post(URI_API, {
				chat_id: CHAT_ID,
				parse_mode: "html",
				text: message,
			})
			.catch((err) => {
				console.warn(err);
			})
			.finally(() => {
				SetSuccessSend(true);
				setTimeout(() => {
					props.setIsModal(false);
				}, 1500);
			});
	};

	return (
		<div className={styles.wrap__modal}>
			{SuccessSend ? (
				<SuccessCard />
			) : (
				<div className={styles.modal}>
					<div className={styles.title}>
						<h2>
							Давайте работать вместе<span>.</span>
						</h2>
						<p>
							Вы работаете над чем-то великим? Я бы с удовольствием помог
							воплотить это в жизнь! Напишите мне письмо и начните свой проект
							прямо сейчас! Просто сделай это.
						</p>
					</div>

					<label>
						Ваше имя
						<input
							placeholder="Заполните это поле"
							required
							value={theName}
							onChange={(event) => handleSetName(event.target.value)}
							type="text"
						/>
					</label>
					<label>
						Ник в Telegram
						<input
							placeholder="Заполните это поле"
							required
							value={nameTg}
							onChange={(event) => handleSetNameTg(event.target.value)}
							type="text"
						/>
					</label>
					<label>
						Ваше предложение
						<textarea
							placeholder="Заполните это поле"
							required
							value={introduction}
							onChange={(event) => handleSetIntroduction(event.target.value)}
						></textarea>
					</label>

					<div className={styles.btns}>
						<button
							disabled={formValid}
							className={`${styles.button} ${styles.buttonDesigner}`}
							onClick={() => {
								submitMessage ? submitMessage() : null;
							}}
						>
							Отправить
						</button>
						<button
							className={`${styles.button} ${styles.buttonSecond}`}
							onClick={() => props.setIsModal(false)}
						>
							Закрыть
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
