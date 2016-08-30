"use strict";

function generateTitle (name) {
    return `## ${name} \`<${name}/>\``;
}

function generateDesciption (description) {
    return `\n\`\`\`\n${description} \n\`\`\`\n`;
}

function generatePropType (type) {
    let values;
    if (Array.isArray(type.value)) {
        values = '('
            + type.value.map(function (typeValue) {
                return typeValue.name || typeValue.value;
            }).join(',')
            + ')';
    } else {
        values = type.value;
    }

    return `${type.name}${(values ? values : '')}`;
}

function generateProp (propName, prop) {
    const type = prop.type ? generatePropType(prop.type) : '';
    if (!prop.description) {
        let nameType = `${propName} <${type}>`;
        if (propName === 'className') {
            prop.description = nameType + ' - Additional class(es) for custom styling.';
        } else if (propName === 'children') {
            prop.description = nameType + ' - Children to pass through the component.';
        }
    }
    const defaultValue = (prop.defaultValue ? '@default' + prop.defaultValue : '');
    const req = prop.required ? '(required)' : '';
    if (prop.description) {
        return (`${prop.description} ${req}  
                 ${defaultValue}\n`);
    }
    return (`${propName} ${req} ${type}
             ${defaultValue}\n`);
}

function generateProps (props) {
    const title = '### Properties';

    return (
        `${title}\n`
        + '\`\`\`\n'
        + Object.keys(props).sort().map(propName => {
            return generateProp(propName, props[propName]);
        }).join('\n') + '\`\`\`\n'
    );
}

function generateMarkdown (name, reactAPI) {
    const markdownString = generateTitle(name) + '\n'
        + (reactAPI.description ? generateDesciption(reactAPI.description) + '\n' : '\n')
        + generateProps(reactAPI.props);

    return markdownString;
}

module.exports = generateMarkdown;
