import stringifyAttributes from 'stringify-attributes';

function headingOneComponent (params: any) {

    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<h1 ${attributesStr}>${children}</h1>`;
}


export default headingOneComponent;
