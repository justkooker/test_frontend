import styles from './User.module.scss';
import userImage from '../../assets/icons/user-min.png';

const User = () => {
	return (
		<div className={styles.user}>
			<div className={styles.user__image}>
				<img src={userImage} alt='user image' />
			</div>
			<div className={styles.user__info}>
				<p className={styles.user__name}>Evano</p>
				<p className={styles.user__position}>Project Manager</p>
			</div>
		</div>
	);
};
export default User;
