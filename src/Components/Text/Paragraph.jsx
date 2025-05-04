
import {twMerge} from 'tailwind-merge'
import {GetSectionLevelIndentStyle} from './Section'

const defaultStyle = `my-2 sm:text-justify`

const Paragraph = (props) => {
	const sectionIndentStyle = GetSectionLevelIndentStyle()
	return <p className={twMerge(defaultStyle, sectionIndentStyle, props.className)}>
		{props.children}
	</p>
}

export default Paragraph
