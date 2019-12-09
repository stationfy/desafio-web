import React from 'react'
import styled, { keyframes } from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'

const Header = styled.header`
	background-color: #343438;
	position: fixed;
	top: 0;
	width: 100%;
`

const Nav = styled.nav`
	display: flex;
	align-items: center;
	max-width: 800px;
	margin: auto;
`

const Back = ({ className, children, getting, handleBack }) =>
	<NavLink className={className} to='/' onClick={() => handleBack(getting)} >
		{ children }
	</NavLink>

const BackLink = styled(Back)`
	flex: 1;
	color: #fff;
	margin-left: 10px;
	font-size: 26px;

	@media (max-width: 710px) {
		font-size: 24px;
	}

	@media (max-width: 540px) {
		font-size: 22px;
	}
	
	@media (max-width: 398px) {
		font-size: 20px;
	}
`

const Arrow = ({ className, icon }) =>
	<FontAwesomeIcon className={className} icon={icon}/>

const shake = keyframes`
	50% {
		margin-left: 11px;
	}
`

const ArrowBack = styled(Arrow)`
	&:hover {
		animation: ${shake} .5s ease-in-out;
	}
`

const AppTitle = styled.h2`
	flex: 3.5;
	color: #fff;

	@media (max-width: 710px) {
		font-size: 22px;
	}

	@media (max-width: 540px) {
		font-size: 20px;
	}

	@media (max-width: 398px) {
		font-size: 18px;
	}

	@media (max-width: 352px) {
		font-size: 16px;
	}
`

const ItemsWrapper = styled.ul`
	padding: 0;
	list-style: none;
	max-width: 800px;
	margin: 90px auto 20px;
	border: 1px solid #dddddd;
	background-color: #eee;
	border-radius: .2em;

	@media (max-width: 820px) {
		margin-top: 70px;
	}

	@media (max-width: 710px) {
		margin-top: 65px;
	}

	@media (max-width: 540px) {
		margin-top: 58px;
	}

	@media (max-width: 398px) {	
		margin-top: 53px;
	}

	@media (max-width: 352px) {
		margin-top: 47px;
	}
`
const ListItem = styled.li`
	border-bottom: 1px solid #d2d2d2;
	padding: 20px;
	transition: background .25s ease;

	&:last-child {
		border-bottom: none;
	}

	&:hover {
		background-color: #f7f7f7;
	}

	@media (max-width: 398px) {	
		padding: 20px 10px;
	}
`

const Clickable = ({ className, children, funcParam, handleClick }) => 
	<Link className={className} to={'/pulls'} onClick={() => handleClick(funcParam)}>
		{ children }
	</Link>

const LinkToPulls = styled(Clickable)`
	display: flex;
	text-decoration: navajowhite;
	color: #343438;
`;

const LeftContent = styled.div`
	flex: 1 1 70%;
`

const RightContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1 1;
`

const ContentTitle = styled.h3`
	margin: 0 0 5px;
	color: #3977aa;

	@media (max-width: 710px) {
		font-size: 16.72px;
	}

	@media (max-width: 540px) {
		font-size: 14.72px;
	}

	@media (max-width: 398px) {
		font-size: 12.72px;
	}
`

const ContentSubTitle = styled.div`
	font-size: 14px;

	@media (max-width: 710px) {
		font-size: 12px;
	}

	@media (max-width: 540px) {
		font-size: 10px;
	}
`

const ContentLabels = styled.div`
	display: flex;
	color: #df9305;
	font-weight: bold;
	margin-top: 20px;
`

const Labels = styled.span`
	&:first-child {
		flex: 1 1;
	}

	&:last-child {
		flex: 4 1;
	}

	@media (max-width: 710px) {
		font-size: 14px;
	}

	@media (max-width: 540px) {
		font-size: 12px;
	}

	@media (max-width: 352px) {
		font-size: 10px;
	}
`

const UserImage = styled.img`
	width: 50px;
	margin-bottom: 10px;

	@media (max-width: 540px) {
		width: 45px;
	}

	@media (max-width: 540px) {
		width: 45px;
	}

	@media screen (max-width: 398px) {
		width: 40px;
	}
`

const ContentName = styled.span`
	margin: 0 0 5px;
	color: #3977aa;

	@media (max-width: 710px) {
		font-size: 12px;
	}

	@media (max-width: 540px) {
		font-size: 10px;
		font-weight: bold;
	}
`

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const Loader = styled.div`
	margin: 0 auto;
	border: 16px solid #dddddd;
	border-radius: 50%;
	border-top: 16px solid #3977aa;
	width: 50px;
	height: 50px;
	animation: ${spin} 2s linear infinite;

	@media (max-width: 540px) {
		width: 45px;
		height: 45px;
	}
`

export {
	Header,
	Nav,
	BackLink,
	ArrowBack,
	AppTitle,
	ItemsWrapper,
	ListItem,
	LinkToPulls,
	LeftContent,
	RightContent,
	ContentTitle,
	ContentSubTitle,
	ContentLabels,
	Labels,
	UserImage,
	ContentName,
	Loader
}
