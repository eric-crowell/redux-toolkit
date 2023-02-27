module.exports = {
  root: true,
  env: {
    jest: true,
  },
  environments: {
		detox: {
			globals: {
				detox: false,
			    device: false,
			    expect: false,
			    waitFor: false,
			    element: false,
			    by: false,
			}
		}
	},
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
