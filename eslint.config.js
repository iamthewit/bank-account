// @ts-check

// import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    // Linting of JS files is producing errors.
    // Seeing as the JS is compiled from TypeScript files, we can disable this.
    // eslint.configs.recommended,

    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
);