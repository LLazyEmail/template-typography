import stringifyAttributes from 'stringify-attributes';

function listItemComponent (params: any) {


    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<li ${attributesStr}>${children}</li>`;;
}

export default listItemComponent;
