import SidePanel from '../../components/SidePanel';
import Product from '../Product';
import styles from './Dashboard.module.scss';



const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
        <SidePanel />
        <Product/>
    </div>
  )
}

export default Dashboard;