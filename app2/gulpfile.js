const { series, watch } = require("gulp");
const fs = require('fs');
const { readdir } = require('fs/promises');
const path = require('path');
// const globby = require("globby")
const fg = require('fast-glob');

async function copyDeps(cb) {
  const packagePath = './package.json';
  const rootPackage = JSON.parse(fs.readFileSync(packagePath, { encoding: 'utf-8' }));
  const dirs = await readdir('./libs');

  const copy = (subPck, propertyKey) => {
    let property = subPck[propertyKey];
    if (property) {
      const keys = Object.keys(property);
      keys.forEach(k => {
        if (rootPackage['devDependencies'][k] || rootPackage['dependencies'][k]) {
          return;
        }
        rootPackage['devDependencies'][k] = property[k];
      });
    }
  };

  for (let dir of dirs) {
    let p = `./libs/${dir}/package.json`;
    const subPck = JSON.parse(fs.readFileSync(p, { encoding: 'utf-8' }));
    copy(subPck, 'dependencies');
    copy(subPck, 'devDependencies');
  }

  fs.writeFileSync(packagePath, JSON.stringify(rootPackage), { encoding: 'utf-8' });
  cb();
}

async function disableNoCheckToLibs(cb) {
  // const filePath = './ttt.ts';
  // let str = fs.readFileSync(filePath, { encoding: 'utf-8' });
  // const noCheckReg = /^\/\/ @ts-nocheck /;
  // if (!noCheckReg.test(str)) {
  //   str = '// @ts-nocheck \r\n' + str;
  //   fs.writeFileSync(filePath, str, { encoding: 'utf-8' });
  // }
  // console.log(`title:`,reg.test(str));
  // str = '// @ts-nocheck \r\n' + str;
  // fs.writeFileSync(filePath, str, { encoding: 'utf-8' });
  // console.log(str);

  // const dirs = fs.readdirSync('./libs/');
  // // for (let dir of dirs) {
  // //   let p = `./libs/${dir}/package.json`;
  // // }
  // console.log(`dirs:`,dirs);

  // glob("./libs/**/*.ts", {}, function (err, files) {
  //   if (err) {
  //     return cb();
  //   }
  //   console.log(`files:`, files);

  //   cb()
  // });

  const files = fg.sync(["./libs/**/*.ts", "./libs/**/*.tsx"]);
  console.log(`files:`, files);
  for (let filePath of files) {
    let str = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const noCheckReg = /^\/\/ @ts-nocheck /;
    if (!noCheckReg.test(str)) {
      str = '// @ts-nocheck \r\n' + str;
      fs.writeFileSync(filePath, str, { encoding: 'utf-8' });
    }
  }
  cb();
}

exports.disableNoCheckToLibs = series(disableNoCheckToLibs);
exports.copyDeps = series(copyDeps);