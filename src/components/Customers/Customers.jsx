import CustomersCols from '../CustomersCols';
import CustomersHeader from '../CustomersHeader';
import CustomersList from '../CustomersList';
import Pagination from '../Pagination/Pagination';
import styles from './Customers.module.scss';

const Customers = () => {
	return (
		<div className={styles.customers}>
			<CustomersHeader />
			<CustomersCols />
			<CustomersList />
			<Pagination />
		</div>
	);
};
export default Customers;
