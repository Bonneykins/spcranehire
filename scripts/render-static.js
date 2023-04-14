'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderStatic() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/static-for-root');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');
   // const destPath = filePath.replace(/src\/pug\//, 'dist/').replace(/\.pug$/, '.html');
    
    sh.ls(sourcePath).forEach( function (file) {
      var filePath = (upath.join(sourcePath,file));
      sh.cp(filePath, destPath)
    })
};