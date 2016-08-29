"use strict";
let Fs = require('fs');
var GenerateMarkdown = require('./generateMarkdown');
var Glob = require('glob');
var Path = require('path');
var ParseComponent = require('react-docgen').parse;
var Promise = require('bluebird');

const getComponentName = (filepath) => {
  let name = Path.basename(filepath);
  let ext;
  while ((ext = Path.extname(name))) {
    name = name.substring(0, name.length - ext.length);
  }
  return name;
};

const componentGlob = Path.join(process.argv[2], '/*.js');

new Promise((resolve, reject) => {
  Glob(componentGlob, (err, files) => {
    if (err) {
      return reject(err);
    }

    return resolve(files);
  });
}).then(filePaths => {
  const files = {};

  filePaths.forEach(path => {
    files[getComponentName(path)] = new Promise((resolveRead, rejectRead) => {
      Fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          return rejectRead(err);
        }

        return resolveRead(data);
      });
    });
  });

  return Promise.props(files);
}).then(fulfillments => {
  for (const componentName in fulfillments) {
    fulfillments[componentName] = ParseComponent(fulfillments[componentName]);
  }

  return fulfillments;
}).then(fulfillments => {
  let markdown = '';

  for (const componentName in fulfillments) {
    const reactAPI = fulfillments[componentName];
    markdown = markdown
      .concat(GenerateMarkdown(componentName, reactAPI))
      .concat('\n\n------------------------------------------------------------------\n\n');
  }

  return markdown;
}).then(markdown => {
  return new Promise((resolve, reject) => {

    Fs.open(Path.join(process.argv[2], '/readme.md'), 'w', (err, fd) => {
      if (err) {
        return reject(err);
      }

      const introLines = [];

      const newMarkdown = introLines.join('\n').concat(markdown);

      return resolve(newMarkdown);
    });

  });
}).then(newMarkdown => {
  Fs.writeFileSync(Path.join(process.argv[2], '/readme.md'), newMarkdown);
});
