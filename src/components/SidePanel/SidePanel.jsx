import { useWindowSize } from '@uidotdev/usehooks';
import Logo from '../Logo';
import SideMenu from '../../layout/SideMenu';
import User from '../User/User';
import styles from './SidePanel.module.scss';
import { useState, useEffect } from 'react';

const SidePanel = () => {
	// const [isOpen, setIsOpen] = useState(false);

	// const windowSize = useWindowSize();
	// useEffect(() => {
	// 	const checkWindowSize = () => {
	// 		if (windowSize.width > 998 && !isOpen) {
	// 			setIsOpen(true);
	// 		}
	// 		if (windowSize.width <= 998 && isOpen) {
	// 			setIsOpen(false);
	// 		}
	// 	};

	// 	window.addEventListener('resize', checkWindowSize);

	// 	return () => {
	// 		window.removeEventListener('resize', checkWindowSize);
	// 	};
	// }, [isOpen, windowSize.width]);

	// const toggleMenu = e => {
	// 	if (e.target.dataset.panel === 'panel') {
	// 		if (isOpen) return;
	// 		setIsOpen(true);
	// 	}
	// 	if (e.target.dataset.panel !== 'panel') {
	// 		console.log('first')
	// 		if (!isOpen) return;
	// 		setIsOpen(false);
	// 	}
	// };
	return (
		<div
			data-panel='panel'
			className={styles.sidePanel}
		>
			<Logo  />
			<SideMenu  />
			<User />
		</div>
	);
};
export default SidePanel;
