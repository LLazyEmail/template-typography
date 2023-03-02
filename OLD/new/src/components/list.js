import stringifyAttributes from 'stringify-attributes';

const listComponent = (params) => {

    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<ul ${attributesStr}>${children}</ul>`;
}

export default listComponent;
