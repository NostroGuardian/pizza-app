import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Sucess.module.css';

export function Success() {
	const navigate = useNavigate();
	return (
		<div className={styles['success']}>
			<img src="/pizza.png" alt="Pizza image" />
			<div className={styles['text']}>Ваш заказ успешно оформлен!</div>
			<Button appearence="big" onClick={() => navigate('/')}>
				Сделать новый
			</Button>
		</div>
	);
}
