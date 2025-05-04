
import {twMerge} from 'tailwind-merge'

import {default as Link} from '#Components/RouteLink'

// TODO Yank into its own component. 
const rowStyle = `my-1 border-neutral-400 text-sm font-semibold font-mono flex flex-row flex-wrap justify-center`
const Row = (props) => {
	const {className, children, ...rest} = props
	return <div className={twMerge(rowStyle, className)} {...rest}>
		{children}
	</div>
}

const Footer = (props) => {
	let app_info = null
	if (import.meta.env.PROD !== true || __APP_INFO_ALWAYS__) {
		let envIndicator = null
		
		if (import.meta.env.MODE === 'development') {
			envIndicator = 'text-emerald-400'
		} else if (import.meta.env.MODE === 'testing') {
			envIndicator = 'text-yellow-400'
		} else {
			envIndicator = 'text-red-500'
		}
		
		//{import.meta.env.PROD !== true ? <span className={'ml-2 ' + envIndicator}>{import.meta.env.MODE}</span> : ''}
		app_info = <>|<div>
			<span className="ml-2">{__APP_NAME__}</span>
			<span className="ml-2">v{__APP_VERSION__}</span>
			<span className={'ml-2 ' + envIndicator}>{import.meta.env.MODE}</span>
		</div></>
	}
	
	return <div className="bg-slate-900 text-slate-100 pt-2 pb-4 sm:p-0.5">
		<Row>
			<Link to="/terms">Terms of Service</Link>
			|
			<Link to="/privacy">Privacy Policy</Link>
			|
			<Link to="/contact">Contact</Link>
			{app_info}
		</Row>
	</div>
}

export default Footer
