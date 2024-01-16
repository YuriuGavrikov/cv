import styles from "./Modal.module.css";
import TheButton from "../generic/TheButton/TheButton";
import TheButtonDesigner from "../generic/TheButtonDesigner/TheButtonDesigner";

type Props = {
	setIsModal: (value: boolean) => void;
};

export default function Modal(props: Props) {
	return (
		<div className={styles.wrap__modal}>
			<div className={styles.modal}>
				<label>
					Ваше имя
					<input type="text" />
				</label>
				<label>
					Ник в Telegram
					<input type="text" />
				</label>
				<label>
					Ваше предложение
					<textarea></textarea>
				</label>
				<div className={styles.btns}>
					<TheButtonDesigner>Отправить</TheButtonDesigner>
					<TheButton setIsModal={props.setIsModal}>Закрыть</TheButton>
				</div>
			</div>
		</div>
	);
}
