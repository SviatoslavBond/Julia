

export const getPathsImages = (CONTEXT) => {
	const imageList = CONTEXT.keys()
		.sort((a, b) => {
			const regex = /(\d+)/;
			const numA = +a.match(regex)[1];
			const numB = +b.match(regex)[1];
			return numA - numB;
		})
		.map(path => CONTEXT(path));
	// its need because require.context() works incorect with absolute paths 
	return Array.from(new Set(imageList));
}