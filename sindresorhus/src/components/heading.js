import stringifyAttributes from 'stringify-attributes';

const headingComponent = (params) => {
    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<h3 ${attributesStr}>${children}</h3>`;
}

const headingOneComponent = (params) => {
    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<h1 ${attributesStr}>${children}</h1>`;
}


export default headingComponent;
