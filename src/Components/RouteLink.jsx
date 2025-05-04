
import {twMerge} from 'tailwind-merge'
import {Link} from 'react-router'

const linkStyle=`cursor-pointer px-2 hover:underline active:translate-y-1`

const RouteLink = (props) => {
	const {className, children, ...rest} = props
	return <Link className={twMerge(linkStyle, className)} {...rest}>{children}</Link>
}

export default RouteLink
