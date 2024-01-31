import styles from './CustomersListItem.module.scss';

const CustomersListItem = ({ user }) => {
	const { name, company, phone, email, country, status } = user;
	return (
		<ul className={styles.userInfo}>
			<li className={styles.userInfo__item}>{name}</li>
			<li className={styles.userInfo__item}>{company}</li>
			<li className={styles.userInfo__item}>{phone}</li>
			<li className={styles.userInfo__item}>{email}</li>
			<li className={styles.userInfo__item}>{country}</li>
			<li className={styles.userInfo__item}>
				<div className={styles.userInfo__status}>{status}</div>
			</li>
		</ul>
	);
};
export default CustomersListItem;
