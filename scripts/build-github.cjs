const { execFileSync } = require('node:child_process');
const options = { stdio: 'inherit', env: { ...process.env, VITE_BASE_PATH: '/proerudio-school-page/' } };
execFileSync(process.execPath, ['scripts/prepare-content.cjs'], options);
execFileSync(process.execPath, ['node_modules/vite/bin/vite.js', 'build'], options);
execFileSync(process.execPath, ['scripts/build-static-pages.cjs'], options);
