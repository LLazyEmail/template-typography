import stringifyAttributes from 'stringify-attributes';

function headingComponent (params: any) {

    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<h3 ${attributesStr}>${children}</h3>`;
}

function headingOneComponent (params: any) {

    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<h1 ${attributesStr}>${children}</h1>`;
}


export default headingComponent;
