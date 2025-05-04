
import {useState} from 'react'
import {twMerge} from 'tailwind-merge'

import RouteLink from '#Components/RouteLink'
import AppSwitcher from '#AppSwitcher'

import {IconClean} from "#Components/Icon"

const buttonStyle = `ml-4 px-2 cursor-pointer rounded-md bg-slate-100 text-slate-900 hover:bg-slate-300 active:translate-y-1`

const linkStyle = `m-1 mx-2 text-lg sm:text-base`

const Link = (props) => {
	const {className, children, ...rest} = props
	return <RouteLink onClick={e => e.uf_nav_link = true} className={twMerge(linkStyle, className)} {...rest}>{children}</RouteLink> 
}

const rowStyle = `my-2 font-semibold font-mono flex flex-row flex-wrap justify-end`

const Row = (props) => {
	const {className, children, ...rest} = props
	return <div className={twMerge(rowStyle, className)} {...rest}>
		{children}
	</div>
}

const Menuburger = (props) => {
	let icon = <IconClean className="text-slate-900" name="menu" />
	
	// Is open?
	if (props.isOpen) {
		icon = <IconClean className="text-slate-900" name="menu_open" />
	}
	
	return <button onClick={props.onClick} className={buttonStyle + ' flex justify-center items-center'}>{icon}</button>
}

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	
	{/*fixed top-0 animate-slideDown sm:static*/}
	return <nav className="bg-slate-900 text-slate-100  flex justify-center">
		<div className="px-2 max-w-4xl flex-1 flex flex-col justify-end items-end">
			<Row>
				<Link to="/portfolio">
					Experience
				</Link>
				
				<Link to="/">
					About
				</Link>
				
				<Menuburger onClick={e => setIsOpen(!isOpen)} isOpen={isOpen} />
			</Row>
			
			{isOpen && <>
				<Row onClick={e => e.uf_nav_link && setIsOpen(false)}>
					<Link to="/weather">
						Weather
					</Link>
					
					<Link to="/msw-test">
						Mock Service Worker
					</Link>
					
					<Link to="/promises">
						JS Promise
					</Link>
					
					<Link to="/random">
						PseudoRNG
					</Link>
					
					<Link to="/chess">
						Chess
					</Link>
				</Row>
				<Row>
					<AppSwitcher className={buttonStyle} appid="graphics">
						Graphics
					</AppSwitcher>

					<AppSwitcher className={buttonStyle} appid="reactformula">
						React Formula
					</AppSwitcher>
				</Row>
			</>}
		</div>
	</nav>
}

export default Header
