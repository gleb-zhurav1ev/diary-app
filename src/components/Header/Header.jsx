import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';
import classes from '../Header/Header.module.css';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {
	return (
		<>
			<div className={classes.header}>
				<Logo image={logos[0]} />
			</div>
			<SelectUser />
		</>
	);
}

export default Header;
