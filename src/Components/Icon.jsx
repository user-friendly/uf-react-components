
import _ from 'lodash'

import {twMerge} from 'tailwind-merge'

const materialSymbolsClass = 'material-symbols-sharp' 

const iconStyle = `
	p-2 rounded-lg bg-gray-100 select-none cursor-pointer
	hover:bg-gray-200 active:bg-gray-300 text-gray-700
`

const iconDecorativeStyle = `text-[2rem] p-2 select-none text-gray-700`

// TODO Is this an Icon or is it a button?

const Icon = (props) => {
	if (props.name === undefined) {
		return <></>
	}
	const name = props.name
	const className = props.className
	const newProps = _.omit(_.clone(props), ['name', 'className'])
	// material-symbols-outlined class is always on.
	return <span className={materialSymbolsClass + ' ' + twMerge(iconStyle, className)} {...newProps}>{name}</span>
}

const IconDecorative = (props) => {
	if (props.name === undefined) {
		return <></>
	}
	const name = props.name
	const className = props.className
	const newProps = _.omit(_.clone(props), ['name', 'className'])
	// material-symbols-outlined class is always on.
	return <span className={materialSymbolsClass + ' ' + twMerge(iconDecorativeStyle, className)} {...newProps}>{name}</span>
}

const IconClean = (props) => {
	if (props.name === undefined) {
		return <></>
	}
	const {name, className, ...rest} = props
	// material-symbols-outlined class is always on.
	return <span className={materialSymbolsClass + ' ' + className} {...rest}>{name}</span>
}

export {IconDecorative, IconClean}
export default Icon
