const config = {
    '**/*.{js,jsx,ts,tsx}': ['pnpm run lint:eslint', 'pnpm run format:fix'],
    '**/*.{json,html,md,yaml}': ['pnpm run format:check']
}
export default config