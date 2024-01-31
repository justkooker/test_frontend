import { useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import SideMenuItem from '../../components/SideMenuItem';
import styles from './SideMenu.module.scss';
const SideMenu = () => {
	const [activeItem, setActiveItem] = useState('');
	const toggleActivity = e => {
		if (e.target.dataset.name === activeItem) {
			return;
		}
		setActiveItem(e.target.dataset.name);
	};
	return (
		<ul className={styles.menu}>
			<SideMenuItem text='Dashboard' iconId='key' arrow={false} />
			<SideMenuItem text='Product' iconId='product' />
			<SideMenuItem
				text='Customers'
				iconId='customers-hover'
				arrowHover={true}
				active={true}
			/>
			<SideMenuItem text='Income' iconId='wallet' />
			<SideMenuItem text='Promote' iconId='promote' />
			<SideMenuItem text='Help' iconId='help' />
		</ul>
	);
};
export default SideMenu;
