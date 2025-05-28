import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['src/generated/**'] },
  eslint.configs.recommended,
  tseslint.configs.recommended
);
