const { test } = require('node:test');
const assert = require('node:assert/strict');
require('./gh-pages-windows.cjs');
const Git = require('gh-pages/lib/git');

test('removes a large static site in bounded, sequential batches', async () => {
  const git = new Git('.');
  const files = Array.from({ length: 2000 }, (_, i) => `cursuri cu spații/${'pagina-'.repeat(15)}${i}/index.html`);
  const calls = [];
  let running = false;
  git.exec = async (...args) => {
    assert.equal(running, false);
    running = true;
    await new Promise(resolve => setImmediate(resolve));
    calls.push(args);
    running = false;
    return git;
  };
  assert.equal(await git.rm(files), git);
  assert.ok(calls.length > 1);
  assert.deepEqual(calls.flatMap(args => args.slice(5)), files);
  for (const args of calls) {
    assert.deepEqual(args.slice(0, 5), ['rm', '--ignore-unmatch', '-r', '-f', '--']);
    assert.ok(args.join(' ').length < 8000);
  }
});

test('preserves string input and stops when Git fails', async () => {
  const git = new Git('.');
  const calls = [];
  git.exec = async (...args) => { calls.push(args); return git; };
  await git.rm('folder with spaces');
  assert.deepEqual(calls[0], ['rm', '--ignore-unmatch', '-r', '-f', '--', 'folder with spaces']);
  let attempts = 0;
  git.exec = async () => { attempts++; throw new Error('Git failed'); };
  await assert.rejects(git.rm(Array(2000).fill('long-path/'.repeat(20))), /Git failed/);
  assert.equal(attempts, 1);
});
