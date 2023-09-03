module.exports = {
	semi: false,
	trailingComma: 'none',
	singleQuote: true,
	printWidth: 100,
	tabWidth: 2,
	useTabs: false,
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	importOrder: [
		// '^(.*)/components/(.*)$', // Add any folders you want to be separate
		'^src/(.*)$',
		'^(.*)/(?!generated)(.*)/(.*)$', // Everything not generated
		'^(.*)/generated/(.*)$', // Everything generated
		'^[./]' // Absolute path imports
	]
}