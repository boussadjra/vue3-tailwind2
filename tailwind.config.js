let sizes = {};
for (let index = 1; index <= 100; index++) {
	sizes[index + 'px'] = index + 'px';
}

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: { height: sizes, width: sizes },
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
