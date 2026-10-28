const Git = require('gh-pages/lib/git');

// gh-pages expands its removal glob into one argument per file. A full static
// site exceeds Windows' command-line limit even with core.longpaths enabled.
// Patch only this deploy process; do not modify the installed dependency.
Git.prototype.rm = async function (files) {
  const paths = Array.isArray(files) ? files : [files];
  let batch = [];
  let length = 0;
  for (const file of paths) {
    // Allow for quoting and escaped backslashes in Windows argument encoding.
    const cost = file.length * 2 + 3;
    if (batch.length && length + cost > 8000) {
      await this.exec('rm', '--ignore-unmatch', '-r', '-f', '--', ...batch);
      batch = [];
      length = 0;
    }
    batch.push(file);
    length += cost;
  }
  if (batch.length) await this.exec('rm', '--ignore-unmatch', '-r', '-f', '--', ...batch);
  return this;
};
