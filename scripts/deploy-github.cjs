const path = require('node:path');
const { spawnSync } = require('node:child_process');

// Apply to every Git subprocess, including the separate gh-pages cache clone.
// Keep the user's global Git configuration and any inherited overrides intact.
const env = { ...process.env };
const configIndex = Number(env.GIT_CONFIG_COUNT || 0);
env.GIT_CONFIG_COUNT = String(configIndex + 1);
env[`GIT_CONFIG_KEY_${configIndex}`] = 'core.longpaths';
env[`GIT_CONFIG_VALUE_${configIndex}`] = 'true';

const result = spawnSync(process.execPath, [
  require.resolve('gh-pages/bin/gh-pages.js'),
  '-d', 'dist',
  ...process.argv.slice(2),
], {
  cwd: path.resolve(__dirname, '..'),
  env,
  stdio: 'inherit',
});

if (result.error) console.error(result.error.message);
process.exitCode = result.status ?? 1;
