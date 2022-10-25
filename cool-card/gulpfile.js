const { series, watch } = require("gulp");
const fs = require('fs');

function copyToDemo(cb) {
  const demoAssetsPath = '../lowcode-demo/src/universal/assets.json';
  const cardAssets = JSON.parse(fs.readFileSync('./build/lowcode/assets-prod.json', { encoding: 'utf-8' }));
  const demoAssets = JSON.parse(fs.readFileSync(demoAssetsPath, { encoding: 'utf-8' }));
  for (let p of cardAssets.packages) {
    let index = demoAssets.packages.findIndex(dp => dp.package === p.package);
    if (index < 0) {
      index = demoAssets.packages.length;
    }
    demoAssets.packages[index] = p;
  }

  for (let p of cardAssets.components) {
    let index = demoAssets.components.findIndex(dp => dp.exportName === p.exportName);
    if (index < 0) {
      index = demoAssets.components.length;
    }
    demoAssets.components[index] = p;
  }

  fs.writeFileSync(demoAssetsPath, JSON.stringify(demoAssets), { encoding: 'utf-8' });
  cb();
}

function upgradePackageVersion(cb) {
  const packagePath = './package.json';
  const package = JSON.parse(fs.readFileSync(packagePath, { encoding: 'utf-8' }));
  const versionStr = package.version;
  const patchVersionGapIdx = versionStr.lastIndexOf('.');
  let patchVersion = Number(versionStr.slice(patchVersionGapIdx + 1, versionStr.length));
  package.version = versionStr.slice(0, patchVersionGapIdx + 1) + (patchVersion + 1);
  fs.writeFileSync(packagePath, JSON.stringify(package), { encoding: 'utf-8' });
  cb();
}

exports.copyToDemo = series(copyToDemo);
exports.upgradePackageVersion = series(upgradePackageVersion);