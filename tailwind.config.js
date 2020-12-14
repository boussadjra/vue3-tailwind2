let sizes = {};
for (let index = 1; index <= 100; index++) {
	sizes[index + 'px'] = index + 'px';
}
let minSize = {
	'0': '0',
	'1/4': '25%',
	'1/2': '50%',
	'3/4': '75%',
	full: '100%',
};

module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: { height: sizes, width: sizes, minWidth: minSize, minHeight: minSize, screens: { xs: '320px' } },
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
