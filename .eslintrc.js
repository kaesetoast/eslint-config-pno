module.exports = {
	"extends": [
		"airbnb-base",
		"prettier",
	],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 2018,
		"ecmaFeatures": {
			"impliedStrict": true,
			"classes": true
		}
	},
	"env": {
		"browser": true,
		"node": true,
		"jquery": true
	},
	"rules": {
		"no-return-assign": [
			"error",
			"except-parens"
		],
		"no-restricted-syntax": [
			2,
			"ForInStatement",
			"LabeledStatement",
			"WithStatement"
		],
		"no-unused-vars": [
			1,
			{
				"ignoreSiblings": true
			}
		],
		"prefer-const": [
			"error",
			{
				"destructuring": "all",
			}
		],
		"arrow-body-style": [
			2,
			"as-needed"
		],
		"no-unused-expressions": [
			2,
			{
				"allowTaggedTemplates": true
			}
		],
		"no-param-reassign": [
			2,
			{
				"props": false
			}
		],
		"import/prefer-default-export": 1,
		"func-names": 0,
		"space-before-function-paren": 0,
		"comma-dangle": 0,
		"import/extensions": 0,
		"no-underscore-dangle": 0,
		"consistent-return": 0,
		"radix": 0,
		"no-shadow": [
			2,
			{
				"hoist": "all",
				"allow": [
					"resolve",
					"reject",
					"done",
					"next",
					"error"
				]
			}
		],
		"quotes": [
			2,
			"single",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true
			}
		],
		"prettier/prettier": [
			"error",
			{
				"trailingComma": "es5",
				"singleQuote": true,
				"printWidth": 80,
			}
		],
		"node/shebang": 2
	},
	"plugins": [
		"html",
		"prettier",
		"node"
	]
}
