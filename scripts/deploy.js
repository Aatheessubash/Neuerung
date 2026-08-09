import readline from 'readline';
import { execSync } from 'child_process';

function run(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8', stdio: 'inherit' });
  } catch (err) {
    console.error(`❌ Command failed: ${cmd}`);
    process.exit(1);
  }
}

function getBranches() {
  try {
    const output = execSync('git branch -a', { encoding: 'utf8' });
    const lines = output.split('\n');
    const branches = new Set();

    lines.forEach((line) => {
      let clean = line.replace('*', '').trim();
      if (!clean) return;
      if (clean.includes('->')) return;
      clean = clean.replace(/^remotes\/origin\//, '');
      clean = clean.replace(/^origin\//, '');
      if (clean && clean !== 'gh-pages') branches.add(clean);
    });

    const result = Array.from(branches);
    if (!result.includes('main')) result.unshift('main');
    return Array.from(new Set(result));
  } catch {
    return ['main'];
  }
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (query) => new Promise((resolve) => rl.question(query, resolve));

  console.log('\n🚀 ==========================================');
  console.log('   NEUERUNG INTERACTIVE DEPLOYMENT & PUSH');
  console.log('==========================================\n');

  const branches = getBranches();
  console.log('Available Branches:');
  branches.forEach((b, idx) => {
    console.log(`  [${idx + 1}] ${b}`);
  });

  const defaultBranch = branches[0] || 'main';
  const branchChoice = await question(`\nSelect target branch (1-${branches.length} or type branch name) [default: 1 (${defaultBranch})]: `);

  let selectedBranch = defaultBranch;
  const choiceNum = parseInt(branchChoice.trim(), 10);
  if (!isNaN(choiceNum) && choiceNum >= 1 && choiceNum <= branches.length) {
    selectedBranch = branches[choiceNum - 1];
  } else if (branchChoice.trim()) {
    selectedBranch = branchChoice.trim();
  }

  console.log(`\n📌 Selected Branch: '${selectedBranch}'`);

  const defaultMsg = `deploy: update ${selectedBranch} build at ${new Date().toLocaleString()}`;
  const commitMsgInput = await question(`Enter commit message [default: "${defaultMsg}"]: `);
  const commitMsg = commitMsgInput.trim() || defaultMsg;

  console.log(`\n💬 Commit Message: "${commitMsg}"`);
  console.log('\n🔨 Building production bundle...');
  run('npm run build');

  rl.close();

  console.log(`\n🚀 Deploying & Pushing to branch '${selectedBranch}' on origin...\n`);

  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    if (status) {
      console.log('📦 Staging and committing local changes...');
      run('git add -A');
      run(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);
    }
  } catch (e) {
    // Continue if no changes to commit
  }

  run(`git push origin HEAD:refs/heads/${selectedBranch}`);

  console.log(`\n🎉 Success! Deployed and pushed to '${selectedBranch}' with message: "${commitMsg}"\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
