import React,{useContext} from 'react';
import logos from '../images/logo.png'
import userLogo from '../images/userblue.png';
import cart from '../images/cart.png'
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
NavSpan,
NavSpanCart,
} from './NavbarElements';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/auth-context';
const Navbar = () => {
	const ctx=useContext(AuthContext);
	const navigate = useNavigate();

	const handleLOGOUT = () => {
		ctx.onlogout();
		navigate('/')
	  }
return (
	
	<>
	<img src={logos} alt={logos} />
	<Nav>
	
		<Bars />
		<NavMenu>
		
		<NavLink to='/about' >
			About
		</NavLink>
		<NavLink to='/loginPage' >
			Events
		</NavLink>
		<NavLink to='/annual' >
			Annual Report
		</NavLink>
		<NavLink to='/team' >
			Teams
		</NavLink>
		<NavLink to='/blogs' >
			Blogs
		</NavLink>
		<NavLink to='/sign-up'>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		{/*ctx.userTd ?(<NavBtnLink>{ctx.userTd}</NavBtnLink>):(<span>-</span>) */}
		</NavMenu>
		<NavSpanCart ><img src={cart} alt={cart} />{ctx.userTd?"10":"Cart" }</NavSpanCart>
		<NavSpan ><img src={userLogo} alt={userLogo} />{ctx.userTd?ctx.userTd:"Login" }</NavSpan>
		<NavBtn>
		{!ctx.isLoggedIn&&<NavBtnLink to='/applogin'>Sign In</NavBtnLink>}
		{ctx.isLoggedIn&&<NavBtnLink onClick={handleLOGOUT}to='/'>Logout</NavBtnLink>}
		</NavBtn>
	</Nav>
	</>
	
);
};

export default Navbar;
