import * as React from "react"
const IconCover = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={19} height={23} {...props}>
		<defs>
			<clipPath id="a">
				<path
					fill="#fff"
					d="M794 874h13a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-17a3 3 0 0 1 3-3Z"
				/>
			</clipPath>
		</defs>
		<path
			fill="none"
			stroke="#f6f6f6"
			strokeDasharray={0}
			strokeMiterlimit={50}
			strokeWidth={4}
			d="M794 874h13a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-17a3 3 0 0 1 3-3Z"
			clipPath='url("#a")'
			transform="translate(-791 -874)"
		/>
		<path fill="#fff" d="M4 13v-2h11v2Zm1 2v-1h9v1Z" />
	</svg>
)
export default IconCover