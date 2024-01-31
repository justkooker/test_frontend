import styles from './CustomersList.module.scss';
import users from '../../data/users.json';
import CustomersListItem from '../CustomersListItem';
const CustomersList = () => {
	return (
		<>
			<ul className={styles.list}>
				{users.map(user => {
					return (
						<li key={user.phone}>
							<CustomersListItem user={user} />
						</li>
					);
				})}
			</ul>
		</>
	);
};
export default CustomersList;
