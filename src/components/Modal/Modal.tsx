import { useState, useEffect } from "react";
import styles from "./Modal.module.css";

import TheButton from "../generic/TheButton/TheButton";
import TheButtonDesigner from "../generic/TheButtonDesigner/TheButtonDesigner";

import axios from "axios";

type Props = {
	setIsModal: (value: boolean) => void;
};

export default function Modal(props: Props) {
	const [theName, setTheName] = useState("");
	const [nameTg, setNameTg] = useState("");
	const [introduction, setIntroduction] = useState("");
	const [formValid, setFormValid] = useState(true);

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
				props.setIsModal(false);
			});
	};

	return (
		<div className={styles.wrap__modal}>
			<div className={styles.modal}>
				<label>
					Ваше имя
					<input
						required
						value={theName}
						onChange={(event) => handleSetName(event.target.value)}
						type="text"
					/>
				</label>
				<label>
					Ник в Telegram
					<input
						required
						value={nameTg}
						onChange={(event) => handleSetNameTg(event.target.value)}
						type="text"
					/>
				</label>
				<label>
					Ваше предложение
					<textarea
						required
						value={introduction}
						onChange={(event) => handleSetIntroduction(event.target.value)}
					></textarea>
				</label>
				{formValid && <div className={styles.valid}>Заполните все поля</div>}

				<div className={styles.btns}>
					<button
						disabled={formValid}
						className={styles.button}
						type="button"
						onClick={() => {
							submitMessage ? submitMessage() : null;
						}}
					>
						Отправить
					</button>

					<TheButton setIsModal={props.setIsModal}>Закрыть</TheButton>
				</div>
			</div>
		</div>
	);
}
