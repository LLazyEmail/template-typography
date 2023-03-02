import stringifyAttributes from 'stringify-attributes';

const headingOneComponent = (params) => {
    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<h1 ${attributesStr}>${children}</h1>`;
}


export default headingOneComponent;