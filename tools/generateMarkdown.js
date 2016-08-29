"use strict";

function generateTitle (name) {
  return `## ${name} \`<${name}/>\``;
}

function generateDesciption (description) {
  return description.replace(/@param\s*(\w*)\s*{(.+)}(.*)/g, (match, p1, p2, p3)=>{
        return `\n\`\`\` \n/** \n* ${p3} \n*/  \n ${p1} ${p2} \n\`\`\`\n`;
      }) + '\n';
}

function generatePropType (type) {
  let values;
  if (Array.isArray(type.value)) {
    values = '(`'
      + type.value.map(function (typeValue) {
        return typeValue.name || typeValue.value;
      }).join('`,`')
      + '`)';
  } else {
    values = type.value;
  }

  return `\`${type.name}\`${(values ? values : '')}`;
}

function generateProp (propName, prop) {
  if (!prop.description) {
    if (propName === 'className') {
      prop.description = 'Additional class(es) for custom styling.';
    } else if (propName === 'children') {
      prop.description = 'Children to pass through the component.';
    }
  }

  return (
      ` \`${propName}\` ${prop.required ? '(required)' : ''}`
    + ` ${(prop.type ? generatePropType(prop.type) : '')} `
    + ` ${(prop.defaultValue ? `\`${prop.defaultValue}\`` : '')} `
    + ` ${(prop.description ? prop.description : '')} `
    + ''
  );
}

function generateProps (props) {
  const title = '### Properties';

  return (
    `${title}\n`
    + Object.keys(props).sort().map(propName => {
      return generateProp(propName, props[propName]);
    }).join('\n')
  );
}

function generateMarkdown (name, reactAPI) {
  const markdownString = generateTitle(name) + '\n'
    + (reactAPI.description ? generateDesciption(reactAPI.description) + '\n' : '\n')
    + generateProps(reactAPI.props);

  return markdownString;
}

module.exports = generateMarkdown;
