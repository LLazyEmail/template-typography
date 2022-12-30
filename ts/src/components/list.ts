import stringifyAttributes from 'stringify-attributes';

function listComponent (params: any) {



    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<ul ${attributesStr}>${children}</ul>`;
}

export default listComponent;
